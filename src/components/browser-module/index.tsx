import { cn } from "@/lib/utils";

export default function BrowserModule({
  children,
  flex,
}: {
  children: React.ReactNode;
  flex?: boolean;
}) {
  return (
    <div className="browser-frame relative w-[1000px] min-w-[1000px] h-[650px] p-[1px] pt-[84px] overflow-hidden">
      <div className="w-full h-[100%] rounded-b-lg flex overflow-scroll">
        <div
          className={cn("w-full h-fit rounded-b-lg", flex ? "flex" : "")}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
