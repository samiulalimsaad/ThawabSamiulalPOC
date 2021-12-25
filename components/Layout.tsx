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
            <section className="w-screen h-screen overflow-auto bg-gray-100">
                <div>{children}</div>
            </section>
        </>
    );
};

export default Layout;
