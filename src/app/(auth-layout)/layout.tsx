export default function AuthLayout({ children }: ChildrenProps) {
  return (
    <div className="h-full min-h-screen flex justify-center items-center w-full">
      {children}
    </div>
  );
}
