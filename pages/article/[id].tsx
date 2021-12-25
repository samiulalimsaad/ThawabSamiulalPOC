import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { getArticle } from "../../query/article";

const Article = () => {
    const [state, setState] = useState<any>([]);
    const router = useRouter() as any;
    useEffect(() => {
        (async function () {
            router?.query?.id &&
                setState((await getArticle(router?.query?.id)) as any);
        })();
    }, [router?.query?.id]);
    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10 flex">
                <div className="w-3/5">
                    <div className="w-full h-full bg-white space-y-4 px-4">
                        <h2 className="text-2xl font-semibold pt-4">
                            {state?.article[0].title}
                        </h2>
                        <div className="mt-4">
                            <p className="text-gray-600">
                                {state?.article[0].content}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-2/5 h-[90vh] p-4">
                    <div className="bg-gray-200 h-full w-full rounded-md" />
                </div>
            </div>
        </Layout>
    );
};

export default Article;
