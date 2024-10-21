/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";
import { isValidEmail } from "../../lib/utils";
import ModuleTitle from "../util-comps/module-title";
// import InputField from "../util-comps/input-field";
import { useCheckout } from "@/contexts/checkout-context";
import InputField from "../util-comps/input-field";
export default function EmailInput() {
  const { email, setEmail, setStepCompleted, setActiveStep } =
    useCheckout();
  const [localEmail, setLocalEmail] = useState(email);
  useEffect(() => {
    setEmail(localEmail);
    setStepCompleted("email", isValidEmail(localEmail));
  }, [localEmail]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActiveStep("email");
    const newEmail = event.target.value;
    setLocalEmail(newEmail);
  };

  return (
    <div className="w-full py-[10px]">
      <ModuleTitle title="Contact" />
      <div className="grow flex items-center justify-center bg-white rounded-sm">
        <InputField
          value={localEmail}
          placeholder="Email"
          onChange={handleChange}
          validityCheck={isValidEmail}
        />
      </div>
    </div>
  );
}
