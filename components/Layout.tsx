import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import React from "react";
import Navbar from "../components/navbar";
import Loading from "./Loading";

const Layout = ({ children }: { children: any }) => {
    const { user, error, isLoading } = useUser();
    const router = useRouter();

    if (error) {
        return (
            <div className="h-screen w-screen grid place-items-center text-xl font-semibold">
                {error.message}
            </div>
        );
    }

    if (isLoading) return <Loading />;

    if (!user) {
        router.replace("/login");
        return <Loading />;
    } else {
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
    }
};

export default Layout;
