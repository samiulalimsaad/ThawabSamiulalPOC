import { UserProvider } from "@auth0/nextjs-auth0";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Head>
                <title>Hasura - demo</title>
                <meta name="description" content="Light Media Social app" />
                <link
                    rel="icon"
                    href="/userIcon.png"
                    sizes="any"
                    type="image/svg+xml"
                />
            </Head>
            <main className="overflow-hidden h-screen w-screen">
                <UserProvider
                    loginUrl="/api/auth/login"
                    profileUrl="/api/auth/me"
                >
                    <Component {...pageProps} />
                </UserProvider>
            </main>
        </div>
    );
}
export default MyApp;
