"use client";
import { useEffect } from "react";
import { BiSolidErrorCircle } from "react-icons/bi";

export default function Error({ error }: { error: Error }) {
  useEffect(() => { console.error(error.stack); }, [error]);
  return (
    <div className="w-full h-full flex grow flex-col justify-center items-center pb-[20vh]">
      <BiSolidErrorCircle size={40} color="#38B45F" />
      <p className="mx-2">It looks like something went wrong</p>
      <span className="text-sm text-slate-400 m-0">
        Apologies, please speak with the site admin
      </span>
      <div className="flex flex-col items-center min-w-[250px] max-w-[400px] max-h-[300px] overflow-y-auto py-1 px-3 my-2 rounded-md bg-gray-200 text-gray-400">
        <p className="text-[8px] m-0">error details:</p>
        <p className="text-[14px]">{error.message}</p>
      </div>
    </div>
  );
}
