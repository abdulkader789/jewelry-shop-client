// components/SignAccount.tsx
import React from "react";
import { FaUser } from "react-icons/fa";

const SignAccount: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <FaUser />
      <span className="ml-2 text-[13px]">Sign In / Create Account</span>
    </div>
  );
};

export default SignAccount;
