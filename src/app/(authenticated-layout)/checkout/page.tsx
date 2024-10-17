import BrowserModule from "@/components/browser-module";
import CartSummary from "@/components/cart-summary";
import CheckoutMain from "@/components/checkout-main";
import StepTextContainer from "@/components/step-text-container";

export default function StorePage(){
    return (
      <div className="w-full h-full grow flex items-center justify-evenly">
        <BrowserModule flex>
          <CheckoutMain />
          <CartSummary />
        </BrowserModule>
        <StepTextContainer />
      </div>
    );
}
