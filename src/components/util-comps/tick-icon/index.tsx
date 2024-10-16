import { cn } from "@/lib/utils";
import { FaRegCheckCircle } from "react-icons/fa";
export default function TickIcon({
  size = 20,
  display,
}: {
  size?: number;
  display: boolean;
}) {
  return (
    <FaRegCheckCircle
      className={cn(
        "mr-[10px] absolute right-0 transition-all",
        display ? "opacity-100 animate-pulse-in" : "opacity-0"
      )}
      size={size}
      color="#09d40b"
      data-testid="icon-input-valid"
    />
  );
}
