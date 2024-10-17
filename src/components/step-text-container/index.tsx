"use client"
import { useCheckout } from "@/contexts/checkout-context";
import { stepConfigs } from "@/lib/data/step-configs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { VscInfo } from "react-icons/vsc";

const TextBlock = ({ block, title }: { block: string[]; title: string }) => {
  const [display, toggleDisplay] = useState(false);

  useEffect(() => {
    toggleDisplay(false);
    const timeout = Math.floor(Math.random() * 300) + 20;
    setTimeout(() => {
      toggleDisplay(true);
    }, timeout);
  }, [block]);

  return (
    <div>
      {block.map((line: string, idx: number) => (
        <p
          className={cn(
            "text-sm text-gray-600 font-light relative pl-2",
            display ? "opacity-100 transition-all duration-500 ease-in-out left-[-10px]" : "opacity-0 left-0"
          )}
          key={`${title.slice(1, 6)}-${idx}`}
        >
          {line}
        </p>
      ))}
    </div>
  );
};

export default function StepTextContainer({
  productSelection,
}: {
  productSelection?: boolean;
}) {
  const { activeStep, basketItems } = useCheckout();
  const config = stepConfigs[activeStep];

  return (
    <div
      className={cn(
        "w-[350px] min-h-[650px] border flex p-4 py-6 pb-2 gap-2 rounded-lg relative",
        productSelection ? "flex-col justify-between" : ""
      )}
    >
      {!productSelection && (
        <div className="min-h-[40px] max-h-[40px] min-w-[40px] max-w-[40px] relative top-[-5px]">
          <VscInfo size={40} />
        </div>
      )}
      <div>
        {productSelection ? (
          <>
            <h1 className="text-lg font-semibold leading-tight">
              1. Product Selection
            </h1>
            <p
              className={cn(
                "text-sm text-gray-600 font-light relative pl-2 mt-2"
              )}
            >
              As a starting point select one or more product.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-lg font-semibold leading-tight">
              {config.title}
            </h1>
            {config.paragraphs.map((block: string[], idx: number) => (
              <div
                key={`${config.title?.slice(4, 10)}_${
                  block[idx]?.slice
                }_${idx}`}
                className="mt-4"
              >
                <TextBlock block={block} title={config.title} />
              </div>
            ))}
          </>
        )}
      </div>
      {productSelection && (
        <Link href="/checkout">
          <div
            className={cn(
              "flex items-center justify-center w-full h-[35px] rounded-md bg-black text-white font-[500] transition-all duration-300 ease-in-out hover:scale-[1.02] cursor-pointer",
              basketItems.length > 0
                ? "pointer-events-all opacity-100"
                : "pointer-events-none opacity-35"
            )}
          >
            Proceed to checkout
          </div>
        </Link>
      )}
      {activeStep === "proceedToPayment" && (
        <Link href="/analysis">
          <div
            className={cn(
              "flex items-center justify-center w-[calc(100%-16px)] h-[35px] rounded-md bg-black text-white font-[500] transition-all duration-300 ease-in-out hover:scale-[1.02] cursor-pointer absolute bottom-2 left-2"
            )}
          >
            View analysis
          </div>
        </Link>
      )}
    </div>
  );
}
