"use client"
import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useCheckout } from "@/contexts/checkout-context";
import { useRouter } from "next/navigation";

export default function AppHeader() {
  const {setBasketItems, resetCheckout} = useCheckout();
  const router = useRouter();

  const handleSignOut = () => {
    signOut().then(() => {
      setBasketItems([]);
      resetCheckout();
      sessionStorage.clear();
    });
  };
  
  const handleStartOver = () => {
    router.push("/");
    setBasketItems([]);
    resetCheckout();
    sessionStorage.clear();
  }
  return (
    <div className="flex items-center justify-between w-full px-8 py-6 border-b">
      <Link href={"/"}>
        <Image
          height={60}
          width={200}
          src={"/images/fero-logo-full.svg"}
          alt={"fero-logo-text"}
        />
      </Link>
      <div className="flex gap-2">
        <div
          onClick={handleStartOver}
          className="transition-all duration-200 ease-out w-[110px] text-center flex items-center justify-center bg-white text-black border border-black hover:scale-105 cursor-pointer rounded-md font-semibold uppercase text-xs py-2"
        >
          Start over
        </div>
        <div
          onClick={handleSignOut}
          className="transition-all duration-200 ease-out w-[110px] text-center flex items-center justify-center text-white border border-black bg-black hover:scale-105  cursor-pointer rounded-md font-semibold uppercase text-xs py-2"
        >
          Sign out
        </div>
      </div>
    </div>
  );
}
