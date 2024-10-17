import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import CheckoutProvider from "@/contexts/checkout-context";
import AppHeader from "@/components/app-header";

export default async function AuthenticatedLayout({ children }: ChildrenProps) {
  const session = await getServerSession();
  if (!session) return redirect("/api/auth/signin");
  return (
    <div className="h-full w-full bg-white">
      <CheckoutProvider>
        <div className="w-full min-h-screen flex flex-col">
          <AppHeader />
          {children}
        </div>
      </CheckoutProvider>
    </div>
  );
}
