import { cn } from "@/lib/utils";
import spinner from "../../../public/loaders/spinner-white.svg";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const ProceedBtn = ({ basketItems }: { basketItems: CartItemData[] }) => {
  return (
    <Link href="/checkout">
      <div
        className={cn(
          "flex items-center justify-center w-full h-[35px] rounded-md bg-black text-white font-[500] transition-all duration-300 ease-in-out hover:scale-[1.02] cursor-pointer",
          basketItems.length > 0
            ? "pointer-events-all !opacity-100"
            : "pointer-events-none opacity-35"
        )}
      >
        Proceed to checkout
      </div>
    </Link>
  );
};

export default dynamic(() => Promise.resolve(ProceedBtn), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-[35px] rounded-md bg-black text-white font-[500] transition-all duration-300 ease-in-out hover:scale-[1.02] cursor-pointer pointer-events-none opacity-35">
      <Image
        alt={"loader"}
        data-testid="loader"
        src={spinner}
        height={25}
        width={25}
      />
    </div>
  ),
});
