import BrowserModule from "@/components/browser-module";
// import CartSummary from "@/components/cart-summary";
import CheckoutMain from "@/components/checkout-main";
import StepTextContainer from "@/components/step-text-container";
import spinner from '../../../../public/loaders/spinner-grey.svg';
import dynamic from "next/dynamic";
import Image from "next/image";
const CartSummary = dynamic(() => import("@/components/cart-summary"), {
  ssr: false,
  loading: () => (
    <div className="w-[300px] bg-[#f1f1f1] h-[540px] flex items-center justify-center">
      <Image
        alt={"loader"}
        data-testid="loader"
        src={spinner}
        height={45}
        width={45}
        className="relative bottom-[30px]"
      />
    </div>
  ),
});

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
