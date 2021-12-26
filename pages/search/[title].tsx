import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import { getSearchedArticle } from "../../query/article";

const SearchWithTitle = () => {
    const [state, setState] = useState<any>([]);
    const router = useRouter() as any;
    useEffect(() => {
        (async function () {
            router?.query?.title &&
                setState(
                    (await getSearchedArticle(router?.query?.title)) as any
                );
        })();
    }, [router?.query?.title]);

    if (state.length === 0) {
        return <Loading />;
    }
    return (
        <Layout>
            <h2 className="text-4xl font-semibold capitalize block text-center py-5">
                Searched result for {router?.query?.title}
            </h2>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10 flex ">
                <div className="w-3/5">
                    <div className="flex flex-wrap justify-center space-y-4">
                        {state?.article?.length ? (
                            state?.article?.map((v: any) => (
                                <div
                                    key={v.id}
                                    className="bg-white p-4 rounded-md h-40 w-full overflow-hidden"
                                >
                                    <Link href={`/article/${v?.id}`}>
                                        <a>
                                            <h2 className="text-2xl font-semibold mb-4">
                                                {v?.title}
                                            </h2>
                                            <p className="text-gray-600 line-clamp-3">
                                                {v?.content}
                                            </p>
                                        </a>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <div>No Article</div>
                        )}
                    </div>
                </div>
                <div className="w-2/5 h-[90vh] p-4">
                    <div className="bg-gray-200 h-full w-full rounded-md" />
                </div>
            </div>
        </Layout>
    );
};

export default SearchWithTitle;
