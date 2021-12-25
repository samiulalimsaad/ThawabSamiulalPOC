import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Head>
                <title>Light Media</title>
                <meta name="description" content="Light Media Social app" />
                <link
                    rel="icon"
                    href="/logo.svg"
                    sizes="any"
                    type="image/svg+xml"
                />
            </Head>
            <main className="overflow-hidden h-screen w-screen">
                <Component {...pageProps} />
            </main>
        </div>
    );
}
export default MyApp;
