import CartSummary from "@/components/cart-summary";
import BrowserModule from "./_components/browser-module";
import StepTextContainer from "./_components/step-text-container";
import CheckoutMain from "@/components/checkout-main";

export default function StorePage(){
    return (
      <div className="w-full h-full grow flex items-center justify-evenly">
        <BrowserModule>
          <CheckoutMain />
          <CartSummary />
        </BrowserModule>
        <StepTextContainer />
      </div>
    );
}
