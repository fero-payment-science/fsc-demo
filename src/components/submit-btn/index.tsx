import { useCheckout } from "@/contexts/checkout-context";
import { cn } from "@/lib/utils";
import { useState } from "react";
import spinnerWhite from "../../../public/loaders/spinner-white.svg";
import Image from "next/image";

export default function SubmitBtn({
  dependantStep,
}: {
  dependantStep: keyof typeof stepCompleted;
}) {
  const [isStripeSubmitting, setSubmitting] = useState(false);
  const { stepCompleted } = useCheckout();
  const isEnabled = stepCompleted[dependantStep];
  return (
    <div>
      <button
        onClick={() => setSubmitting(true)}
        className={cn(
          "cursor-pointer w-full h-[60px] text-white bg-black flex items-center justify-center relative z-20 hover:bg-opacity-90 transition-opacity duration-300 ease-out",
          isEnabled
            ? "opacity-100 pointer-events-auto"
            : "opacity-50 pointer-events-none"
        )}
        type="submit"
      >
        {!isStripeSubmitting ? (
          "BUY NOW"
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <Image alt="spinner" src={spinnerWhite} height={40} width={40} />
        )}
      </button>

      {/* {errorMessage && (
        <p className="text-xs text-red-600">{errorMessage}</p>
      )} */}
    </div>
  );
}
