import Head from "next/head";
import React from "react";
import ArticleForm from "./articleForm";

const Article = () => {
    return (
        <>
            <Head>
                <title>Article - create a new article</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link
                    rel="icon"
                    href="/userIcon"
                    sizes="any"
                    type="image/svg+xml"
                />
            </Head>
            <div className="h-full flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 ">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">
                    Create a new article
                </h2>
                <ArticleForm />
                <div className="mt-10 text-sm">
                    Github repo:
                    <a
                        href="https://github.com/Thawab/SamiulalPOC"
                        target="_blank"
                        rel="noreferrer"
                        className="ml-2 text-blue-600 hover:underline"
                    >
                        https://github.com/Thawab/SamiulalPOC
                    </a>
                </div>
            </div>
        </>
    );
};
export default Article;
