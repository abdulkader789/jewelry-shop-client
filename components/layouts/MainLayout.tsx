import React from "react";
import { Footer, NavBar } from "../common";

export default function MainLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <NavBar/>
            {children}
            <Footer/>
        </>
    )
}