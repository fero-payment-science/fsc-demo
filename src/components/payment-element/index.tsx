import { cn } from "@/lib/utils";
import { ModuleProps, methodConfig } from "./config";
import Image from "next/image";
import { MdOpenInNew } from "react-icons/md";
import CountrySelector from "../util-comps/country-selector";
import usePaymentElement from "./hooks/use-payment-element";
import { useCheckout } from "@/contexts/checkout-context";

const MethodModule = ({
  children,
  isSelected,
  clickHandler,
  method,
}: ModuleProps) => {
  const config = methodConfig[method];

  return (
    <div
      onClick={clickHandler}
      style={{
        height: isSelected ? `${config.openHeight}px` : "50px",
      }}
      className={cn(
        "flex flex-col w-full transition-all duration-[400ms] ease-out overflow-hidden border rounded-sm mb-[-1px] cursor-pointer"
      )}
    >
      <div className="flex items-center w-full max-h-[50px] min-h-[50px] px-2">
        <div className="flex items-center gap-2">
          <div className="min-h-[20px] min-w-[20px] max-h-[20px] max-w-[20px] rounded-full border border-[#979797] flex items-center justify-center">
            {isSelected && (
              <div
                className={cn(
                  "min-h-[14px] min-w-[14px] rounded-full border-[5px] border-[#242424] relative"
                )}
              />
            )}
          </div>
          <div className="flex justify-start w-[80px]">
            <div className="min-h-[30px] max-h-[30px] min-w-[50px] max-w-[50px] relative">
              <Image
                alt={`${method}_logo`}
                src={config.logoUrl}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <p className="text-gray-500 font-medium">{config.title}</p>
        </div>
      </div>
      <div className="flex grow p-2">
        <div className="border px-4 py-2 rounded-md h-[calc(100&-4px)] w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function PaymentElement({
  dependantStep,
}: {
  dependantStep: keyof typeof stepCompleted;
}) {
  const { stepCompleted } = useCheckout();
  const {
    selectedMethod,
    setSelectedMethod,
    handleCVC,
    handleExpiryDate,
    handleCreditCard,
    handleCountry,
  } = usePaymentElement();

  const isEnabled = stepCompleted[dependantStep];

  return (
    <div
      className={cn(
        "w-full border rounded-sm p-2 ease-in-out duration-300 transition-opacity",
        isEnabled
          ? "opacity-100"
          : "opacity-20 pointer-events-none"
      )}
    >
      <MethodModule
        isSelected={selectedMethod === "card"}
        clickHandler={() => setSelectedMethod("card")}
        method="card"
      >
        <div className="w-full grid grid-cols-4 gap-2 mt-2">
          <div className={"col-span-2"}>
            <p className={"text-sm text-gray-600 mb-1 pl-1"}>Card number</p>
            <div className="border rounded-md h-[45px] w-full flex items-center p-2">
              <input
                name="number"
                className="w-full text-sm"
                type="text"
                onChange={handleCreditCard}
              />
            </div>
          </div>
          <div className={"col-span-1"}>
            <p className={"text-sm text-gray-600 mb-1 pl-1"}>Expiry date</p>
            <div className="border rounded-md h-[45px] w-full flex items-center p-2">
              <input
                className="w-full text-sm"
                type="text"
                onChange={handleExpiryDate}
              />
            </div>
          </div>
          <div className={"col-span-1"}>
            <p className={"text-sm text-gray-600 mb-1 pl-1"}>Security code</p>
            <div className="border rounded-md h-[45px] w-full flex items-center p-2">
              <input
                className="w-full text-sm"
                type="text"
                onChange={handleCVC}
              />
            </div>
          </div>
          <div className="col-span-4">
            <CountrySelector minimalVersion onChange={handleCountry} />
          </div>
        </div>
      </MethodModule>
      <MethodModule
        isSelected={selectedMethod === "paypal"}
        clickHandler={() => setSelectedMethod("paypal")}
        method="paypal"
      >
        <Image
          alt="paypal logo"
          src={methodConfig.paypal.logoUrl}
          width={50}
          height={30}
        />
        <p className="text-sm mt-4">PayPal selected</p>
        <div className="w-full h-[1px] bg-gray-300 my-4" />
        <div className="flex gap-2 items-center">
          <MdOpenInNew className="text-gray-400" size={30} />
          <p className="text-sm font-light text-gray-500">
            After submission, you will be redirected to securely complete next
            steps.
          </p>
        </div>
      </MethodModule>
      <MethodModule
        isSelected={selectedMethod === "googlepay"}
        clickHandler={() => setSelectedMethod("googlepay")}
        method="googlepay"
      >
        <Image
          alt="paypal logo"
          src={methodConfig.googlepay.logoUrl}
          width={50}
          height={30}
          className="mt-4"
        />
        <p className="text-sm mt-4">GooglePay selected</p>
        <div className="w-full h-[1px] bg-gray-300 my-4" />
        <div className="flex gap-2 items-center">
          <MdOpenInNew className="text-gray-400" size={30} />
          <p className="text-sm font-light text-gray-500">
            After submission, you will be redirected to securely complete next
            steps.
          </p>
        </div>
      </MethodModule>
    </div>
  );
}
