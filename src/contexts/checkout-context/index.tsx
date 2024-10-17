"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { CheckoutContextData, defaultCartItems, defaultData } from "./types";
import { UiStep } from "@/lib/data/step-configs";

const isAddressFilled = (address: Address, stateRequired: boolean) => {
  const excludedKeys = stateRequired
    ? ["company", "address_2", "email"]
    : ["company", "address_2", "email", "state"];

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
  const [basketItems, setBasketItems] =
    useState<CartItemData[]>(defaultCartItems); 
  const [email, setEmail] = useState<string>(defaultData.email);
  const [useShippingAddress, setUseShippingAddress] = useState<boolean>(true);
  const [stateRequired, setStateRequired] = useState<boolean>(true);
  const [stepCompleted, setStepCompleted] = useState(
    defaultData.stepCompleted
  );

  const [selectedShipping, setSelectedShipping] = useState<ShippingRate | null>(
    null
  );

  const [shippingAddress, setShippingAddress] = useState<Address>(
    defaultData.shippingAddress
  );

  const [billingAddress, setBillingAddress] = useState<Address>(
    defaultData.billingAddress
  );

  const handleStepCompleted = (step: string, val?: boolean) =>
    setStepCompleted((prev) => ({ ...prev, [step]: val ?? true }));

  useEffect(() => {
    const boolValue = isAddressFilled(shippingAddress, stateRequired)
    handleStepCompleted("address", boolValue);
    // setTimeout(
    //   () => !boolValue && handleStepCompleted("shipping", false),
    //   100
    // );
  }, [shippingAddress, stateRequired]);

  useEffect(() => {
    handleStepCompleted("shipping", selectedShipping !== null);
  }, [selectedShipping, stateRequired]);

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
        useShippingAddress,
        setUseShippingAddress,
        selectedShipping,
        setSelectedShipping,
        setStateRequired,
        basketItems,
        setBasketItems,
        activeStep,
        setActiveStep,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckout = (): CheckoutContextData => {
  return useContext(CheckoutContext);
};
