/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { CheckoutContextData, defaultData } from "./types";
import { UiStep } from "@/lib/data/step-configs";
import API from "@/api";
import { useSessionStorage } from "usehooks-ts";

const isAddressFilled = (address: Address, stateRequired: boolean) => {
  const excludedKeys = stateRequired
    ? ["company", "address_2", "email", "phone"]
    : ["company", "address_2", "email", "phone", "state"];

  const returnValue = Object.keys(address)
    .filter((key) => !excludedKeys.includes(key))
    .every((key) => address[key as keyof typeof address] !== "");

    return returnValue;
};

const CheckoutContext = createContext<CheckoutContextData>(
  defaultData
);

export default function CheckoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeStep, setActiveStep] = useState<UiStep>("loadCheckout");
  const [basketItems, setBasketItems] = useSessionStorage<CartItemData[]>(
    "fsc_basket_items",
    []
  ); 
  const [email, setEmail] = useState<string>(defaultData.email);
  const [useShippingAddress, setUseShippingAddress] = useState<boolean>(true);
  const [stateRequired, setStateRequired] = useState<boolean>(true);
  const [ipAddress, setIpAddress] = useState<string>("");
  const [stepCompleted, setStepCompleted] = useState(
    defaultData.stepCompleted
  );

  const [selectedShipping, setSelectedShipping] = useState<ShippingRate | null>(
    null
  );

  const [shippingAddress, setShippingAddress] = useSessionStorage<Address>(
    "fsc_shippingAddress",
    defaultData.shippingAddress
  );

  const [billingAddress, setBillingAddress] = useSessionStorage<Address>('fsc_billingAddress',
    defaultData.billingAddress
  );

  const handleStepCompleted = (step: string, val?: boolean) =>
    setStepCompleted((prev) => ({ ...prev, [step]: val ?? true }));

  const getUserIp = async () => {
    const { ip_address: ipAddress } = await API.getUserIP();
    setIpAddress(ipAddress);
  };

  const resetCheckout = () => {
    setActiveStep("loadCheckout");
    setEmail(defaultData.email);
    setBasketItems([]);
    setStepCompleted(defaultData.stepCompleted)
  };

  useEffect(() => {
    const boolValue = isAddressFilled(shippingAddress, stateRequired)
    handleStepCompleted("address", boolValue);
  }, [shippingAddress, stateRequired]);

  useEffect(() => {
    handleStepCompleted("shipping", selectedShipping !== null);
  }, [selectedShipping, stateRequired]);

  useEffect(() => {
    getUserIp();
  }, []);

  return (
    <CheckoutContext.Provider
      value={{
        shippingAddress,
        setShippingAddress,
        billingAddress,
        setBillingAddress,
        email,
        setEmail,
        stepCompleted,
        setStepCompleted: handleStepCompleted,
        resetCheckout,
        useShippingAddress,
        setUseShippingAddress,
        selectedShipping,
        setSelectedShipping,
        setStateRequired,
        basketItems,
        setBasketItems,
        activeStep,
        setActiveStep,
        ipAddress,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckout = (): CheckoutContextData => {
  return useContext(CheckoutContext);
};
