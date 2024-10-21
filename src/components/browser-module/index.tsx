import { cn } from "@/lib/utils";
import { Suspense } from "react";

export default function BrowserModule({
  children,
  flex,
}: {
  children: React.ReactNode;
  flex?: boolean;
}) {
  return (
    <div className="browser-frame relative w-[900px] min-w-[900px] h-[600px] p-[1px] pt-[78px] overflow-hidden">
      <div className="w-full h-[100%] rounded-b-lg flex overflow-scroll">
        <div className={cn("w-full h-fit rounded-b-lg", flex ? "flex" : "")}>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </div>
      </div>
    </div>
  );
}
