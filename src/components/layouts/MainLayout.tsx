import React from "react";
import { Footer, NavBar } from "../common";
import "../../styles/font.css";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
