"use client"
import { useCheckout } from "@/contexts/checkout-context";
import { stepConfigs } from "@/lib/data/step-configs";
import { cn } from "@/lib/utils";
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
            "text-sm text-gray-600 font-light relative",
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

export default function StepTextContainer() {
  const { activeStep } = useCheckout();
  const config = stepConfigs[activeStep];

  return (
    <div className="w-[350px] min-h-[650px] border flex p-4 py-6 gap-4 rounded-lg">
      <VscInfo size={80} className="relative top-[-20px]" />
      <div>
        <h1 className="text-lg font-semibold leading-tight">{config.title}</h1>
        {config.paragraphs.map((block: string[], idx: number) => (
          <div
            key={`${config.title?.slice(4, 10)}_${block[idx]?.slice}_${idx}`}
            className="mt-4"
          >
            <TextBlock block={block} title={config.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
