import { useRouter } from "next/router";
import React from "react";
import Navbar from "../components/navbar";

const Layout = ({ children }: { children: any }) => {
    const router = useRouter();
    return (
        <>
            <header>
                <Navbar />
            </header>
            <section className="w-screen h-screen overflow-auto bg-gray-100 pb-24">
                {children}
            </section>
        </>
    );
};

export default Layout;