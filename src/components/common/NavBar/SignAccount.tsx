// components/SignAccount.tsx
import React from "react";
import { FaUser } from "react-icons/fa";

const SignAccount: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <FaUser className="text-orange-300" />
      <span className="ml-2 text-[13px] font-navlink uppercase">
        Sign In / Create Account
      </span>
    </div>
  );
};

export default SignAccount;
