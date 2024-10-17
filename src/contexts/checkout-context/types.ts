import { UiStep } from "@/lib/data/step-configs";
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
  resetCheckout: () => void;
  setStateRequired: Dispatch<SetStateAction<boolean>>;
  basketItems: CartItemData[];
  setBasketItems: Dispatch<SetStateAction<CartItemData[]>>;
  activeStep: UiStep;
  setActiveStep: Dispatch<SetStateAction<UiStep>>;
  ipAddress: string;
}

export const defaultAddress: Address = {
  address_1: "",
  address_2: "",
  city: "",
  company: "",
  country: "",
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
  basketItems: [],
  setBasketItems: () => {},
  resetCheckout: () => {},
  activeStep: "loadCheckout",
  setActiveStep: () => {},
  ipAddress: "",
};

export const defaultCartItems: CartItemData[] = [
  {
    id: 31,
    name: "Hat",
    price: "1200",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.\n\nPhotography by @cottonbro.",
    sku: "woo-fashion-hat",
    stock_status: "instock",
    image:
      "https://9fcbd1b34338.ngrok.app/wp-content/uploads/2024/09/167113811-0be977aa-edfe-4a09-b36d-a62f02de4a29.jpeg",
    permalink: "https://9fcbd1b34338.ngrok.app/product/hat/",
    quantity: 1,
  },
  {
    id: 29,
    name: "Shirt - Green",
    price: "2000",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.\n\nPhotography by @cottonbro.",
    sku: "woo-fashion-shirt-green",
    stock_status: "instock",
    image:
      "https://9fcbd1b34338.ngrok.app/wp-content/uploads/2024/09/167113801-fd8243b7-8465-4f82-86c1-2c54797fe296.jpeg",
    permalink: "https://9fcbd1b34338.ngrok.app/product/shirt-green/",
    quantity: 2,
  },
];

// reducer function to calculate total price of items in cart
export const calculateCartTotal = (cartItems: CartItemData[]): number =>
  cartItems.reduce((acc, item) => acc + +item.price * item.quantity, 0);