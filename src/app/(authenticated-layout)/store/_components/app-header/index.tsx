"use client"
import Image from "next/image";
import { signOut } from "next-auth/react";

export default function AppHeader() {
  const handleSignOut = () => {
    signOut().then(() => {
      //   resetStore();
    });
  };
  return (
    <div className="flex items-center justify-between w-full px-8 py-6 border-b">
      <Image
        height={60}
        width={200}
        src={"/images/fero-logo-full.svg"}
        alt={"fero-logo-text"}
      />
      <div
        onClick={handleSignOut}
        className="py-2 px-6 text-white bg-black hover:bg-black/80 cursor-pointer rounded-md font-semibold uppercase text-sm"
      >
        Sign out
      </div>
    </div>
  );
}
