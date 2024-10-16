import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import StoreHeader from "./_components/store-header";

const StoreLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession();
  if (!session) return redirect("/api/auth/signin");
  return (
    <div className="w-full min-h-screen flex flex-col">
      <StoreHeader />
        {children}
    </div>
  );
};

export default StoreLayout;
