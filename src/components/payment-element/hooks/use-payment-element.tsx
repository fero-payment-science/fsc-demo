/* eslint-disable react-hooks/exhaustive-deps */
import { PaymentMethod } from "@/components/payment-element/config";
import { useCheckout } from "@/contexts/checkout-context";
import { useEffect, useState } from "react";

export default function usePaymentElement() {
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("card");
    const {setStepCompleted, setActiveStep } = useCheckout();

  const [formData, setFormData] = useState<{
    cardNumber: string;
    expiryDate: string;
    securityCode: string;
    country: string;
  }>({
    cardNumber: "",
    expiryDate: "",
    securityCode: "",
    country: "",
  });

  useEffect(() => {
    if (selectedMethod !== "card") {
      setStepCompleted("payment", true);
    } else {
      const { cardNumber, expiryDate, securityCode } = formData;
      const isCardValid =
        cardNumber.length === 16 &&
        expiryDate.length === 5 &&
        securityCode.length === 3 && 
        formData.country !== "";
      setStepCompleted("payment", isCardValid);
    }
  }, [selectedMethod, formData]);

  const handleInput = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, country:e.target.value });
  }

  const handleCreditCard = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove all non-digit characters
    input = input.substring(0, 16); // Limit the input to 16 digits

    // Add space after every 4 digits
    const formattedInput = input.match(/.{1,4}/g)?.join(" ") || "";

    e.target.value = formattedInput;
    handleInput("cardNumber", input);
  };

  const handleExpiryDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove all non-digit characters

    // Ensure it only allows a maximum of 4 digits (MMYY format)
    if (input.length > 4) {
      input = input.substring(0, 4);
    }

    // Insert a slash after the first two digits for the "MM/YY" format
    if (input.length > 2) {
      input = input.substring(0, 2) + "/" + input.substring(2);
    }

    e.target.value = input;
    handleInput("expiryDate", input);
  };

  const handleCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove all non-digit characters

    input = input.substring(0, 3); // Limit the input to 3 characters

    e.target.value = input;
    handleInput("securityCode", input);
  };

  const handleSelect = (method: PaymentMethod) => {
    setSelectedMethod(method);
    setActiveStep("paymentMethod");

  }

  return {
    handleCVC,
    handleCreditCard,
    handleExpiryDate,
    selectedMethod,
    setSelectedMethod: handleSelect,
    handleCountry,
  };
}
