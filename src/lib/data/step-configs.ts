export type UiStep =
  | "loadCheckout"
  | "email"
  | "shippingMethod"
  | "paymentMethod"
  | "proceedToPayment";

export interface StepConfig {
  title: string;
  paragraphs: string[][];
}
export const stepConfigs: Record<UiStep, StepConfig> = {
  loadCheckout: {
    title: "Data collected when checkout page is loaded...",
    paragraphs: [
      [
        "🕒 Time Spent on Site:",
        "e.g: 1 min25s",
        "Tracking how long you’ve been browsing",
      ],
      [
        "🛒 Items in Cart:",
        "e.g: 2 items",
        "We’re monitoring the number and type of items in your cart",
      ],
      [
        "💰 Average Cart Value:",
        "e.g: €85.50",
        "Calculating the total value of your cart",
      ],
      [
        "📊 Lifetime Value (LTV):",
        "e.g: €350.00",
        "Using historical data to predict your future purchases and suggest the most relevant offers.",
      ],
      [
        "⚠️ Abandonment Risk:",
        "e.g: Moderate (45%)",
        "Assessing your likelihood of abandoning the checkout based on previous behavior and industry benchmarks.",
      ],
      [
        "🔍 Abandonment Reasoning:",
        "e.g: Potential reason: High shipping costs",
        "Identifying potential reasons for abandonment",
      ],
    ],
  },
  email: {
    title: "Data collected when email is entered...",
    paragraphs: [
      [
        "💳 Mastercard Data:",
        "e.g: Card Type: Mastercard",
        "Identifying card type to streamline payment options and enhance security during checkout.",
      ],
      [
        "📱 Social Media Data:",
        "e.g: Connected Accounts: Facebook, Instagram",
        "Using your social media presence to personalise marketing offers and recommendations.",
      ],
      ["🌐 IP Address:", "e.g: 192.0.2.1", "Tracking your location"],
      [
        "🖥️ User Agent Data:",
        "e.g: Browser: Chrome 93, OS: Windows 10",
        "Analyzing device and browser type to optimize the checkout interface for your experience.",
      ],
      [
        "🔗 Affiliate Data:",
        "e.g: Affiliate Source: SummerSale2024",
        "Identifying the affiliate through which you accessed our site to tailor promotional offers.",
      ],
    ],
  },
  shippingMethod: {
    title: "Data collected when shipping method selected:",
    paragraphs: [
      [
        "📊 Probability of Usage:",
        "e.g: Express Shipping: 75%",
        "Standard Shipping: 25%",
        "Indicating the likelihood of each method being chosen based on historical data.",
      ],
      [
        "💵 Shipping Cost:",
        "e.g: €5.00 for Express Shipping",
        "Clearly displaying the cost associated with your selected shipping method.",
      ],
      [
        "🔍 Additional Info:",
        "e.g: Delivery Window: 1 PM - 5 PM",
        "Providing an estimated delivery window to enhance planning.",
      ],
      [
        "🌍 Local Carrier:",
        "e.g: Carrier: DHL",
        "Using trusted local carriers to ensure timely delivery of your order.",
      ],
    ],
  },
  paymentMethod: {
    title: "Data collected when payment method selected...",
    paragraphs: [
      [
        "📈 Probability of Usage:",
        "e.g: Visa Credit Card: 60%",
        "Mastercard: 30%",
        "PayPal: 10%",
        "Indicating the likelihood of each method being selected based on historical behavior.",
      ],
      [
        "💰 Total Amount Due:",
        "e.g: 85,50€",
        "Clearly displaying the total cost of your order including taxes and shipping.",
      ],
      [
        "🔒 Security Features:",
        "e.g: SCA (Strong Customer Authentication) Required: Yes",
        "Ensuring an additional layer of security for your payment transaction.",
      ],
      [
        "🛡️ PSP Routing for Conversion:",
        "e.g: Payment Service Provider: Stripe",
        "Routing your payment through Stripe for secure processing and better conversion rates.",
      ],
      [
        "⏳ Estimated Processing Time:",
        "e.g: Instant",
        "Indicating that your payment will be processed immediately for a seamless checkout experience.",
      ],
    ],
  },
  proceedToPayment: {
    title: "Data collected when we proceed to payment...",
    paragraphs: [
      [
        "🛡️ SCA Exemption Applied:",
        "e.g: Exemption: Yes",
        "Your transaction qualifies for exemption under Strong Customer Authentication regulations for a smoother checkout experience.",
      ],
      [
        "🔄 PSP Routing for Conversion:",
        "e.g: Payment Service Provider: Stripe",
        "Routing your payment through Stripe to optimise conversion rates and ensure secure processing.",
      ],
      [
        "💵 Total Amount Charged:",
        "e.g: €85.50",
        "Confirming the total amount to be charged to your selected payment method.",
      ],
      [
        "⏳ Estimated Transaction Time:",
        "e.g: 1-2 Seconds",
        "Indicating the expected time for your payment to be processed and confirmed.",
      ],
    ],
  },
};
