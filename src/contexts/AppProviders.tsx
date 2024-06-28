// contexts/AppProviders.tsx
import React, { ReactNode } from "react";
import { MenuProvider } from "./MenuContext";

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return <MenuProvider>{children}</MenuProvider>;
};

export default AppProviders;
