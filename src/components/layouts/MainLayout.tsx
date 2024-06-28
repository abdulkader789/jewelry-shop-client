import React from "react";
import { Footer, NavBar } from "../common";
import "../../styles/font.css";
import AppProviders from "../../contexts/AppProviders";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProviders>
      <NavBar />
      {children}
      <Footer />
    </AppProviders>
  );
}
