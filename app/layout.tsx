import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jewelry Shop",
  description: "Generated by create next app",
  authors: [
    { name: "Abdul Kader", url: "https://github.com/abdulkader789" },
    { name: "Md Mahi Kaishar", url: "mahikaishar@gmail.com" },
    { name: "", url: "" },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
