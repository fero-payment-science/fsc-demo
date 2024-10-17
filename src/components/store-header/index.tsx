import Image from "next/image";
import logo from '../../../public/images/e-commerce-logo.png';
import Link from "next/link";
import Basket from "../basket";
export default function StoreHeader(){
    return (
      <div className="w-full flex items-center justify-between px-10 py-4 relative">
        <div className="flex gap-4">
          <p className="text-xs cursor-pointer font-semibold text-indigo-600 border-b border-indigo-600">
            shop
          </p>
          <Link href={"/checkout"}>
            <p className="text-xs cursor-pointer text-gray-500 hover:text-indigo-600">
              checkout
            </p>
          </Link>
          <p className="text-xs cursor-pointer text-gray-500 hover:text-indigo-600">
            products
          </p>
          <p className="text-xs cursor-pointer text-gray-500 hover:text-indigo-600">
            about us
          </p>
        </div>
        <div className="flex items-center gap-1 center-horiz">
          <Image src={logo} alt="logo" width={40} height={40} />
          <h1 className="text-xl font-extrabold text-indigo-700 italic">
            E-SHOP
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs cursor-pointer text-gray-500 hover:text-indigo-600">
            login
          </p>
          <p className="text-xs cursor-pointer text-gray-500 hover:text-indigo-600">
            signup
          </p>
          <Basket />
        </div>
      </div>
    );
}