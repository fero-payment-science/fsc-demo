import { Dispatch, SetStateAction } from "react";

export interface CheckoutContextData {
  shippingAddress: Address;
  billingAddress: Address;
  selectedShipping: ShippingRate | null;
  useShippingAddress: boolean;
  email: string;
  stepCompleted: {
    email: boolean;
    address: boolean;
    shipping: boolean;
    payment: boolean;
  };
  setSelectedShipping: Dispatch<SetStateAction<ShippingRate | null>>;
  setUseShippingAddress: Dispatch<SetStateAction<boolean>>;
  setShippingAddress: Dispatch<SetStateAction<Address>>;
  setBillingAddress: Dispatch<SetStateAction<Address>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setStepCompleted: (step: string, val?: boolean) => void;
  setStateRequired: Dispatch<SetStateAction<boolean>>;
}

export const defaultAddress: Address = {
  address_1: "",
  address_2: "",
  city: "",
  company: "",
  country: "",
  email: "",
  first_name: "",
  last_name: "",
  phone: "",
  postcode: "",
  state: "",
};

export const defaultData: CheckoutContextData = {
  shippingAddress: defaultAddress,
  billingAddress: defaultAddress,
  useShippingAddress: true,
  selectedShipping: null,
  email: "",
  stepCompleted: {
    email: false,
    address: false,
    shipping: false,
    payment: false,
  },
  setSelectedShipping: () => {},
  setEmail: () => {},
  setUseShippingAddress: () => {},
  setBillingAddress: () => {},
  setShippingAddress: () => {},
  setStepCompleted: () => {},
  setStateRequired: () => {},
};
