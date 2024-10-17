export type PaymentMethod = "card" | "paypal" | "googlepay" | "applepay";

export const methodConfig: Record<
  PaymentMethod,
  { title: string; openHeight: number; logoUrl: string }
> = {
  card: {
    title: "Card",
    openHeight: 220,
    logoUrl: "/logos/card.png",
  },
  paypal: { title: "PayPal", openHeight: 230, logoUrl: "/logos/paypal.png" },
  googlepay: {
    title: "Google Pay",
    openHeight: 230,
    logoUrl: "/logos/googlepay.png",
  },
  applepay: {
    title: "Apple Pay",
    openHeight: 200,
    logoUrl: "/logos/applepay.png",
  },
};

export interface ModuleProps extends ChildrenProps {
    clickHandler: () => void;
    isSelected: boolean;
    method: PaymentMethod;
}