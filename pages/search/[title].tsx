import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import { getSearchedArticle } from "../../query/article";

const SearchWithTitle = () => {
    const router = useRouter() as any;
    const { data, loading, error } = useQuery(getSearchedArticle, {
        variables: {
            title: router?.query?.title,
        },
    });
    if (error) {
        return (
            <section className="h-screen w-screen grid place-items-center ">
                <div>
                    <p>Unauthenticated Please Login before access</p>
                    <p>{error.message}</p>
                </div>
            </section>
        );
    }
    if (loading) {
        return (
            <div className="h-full w-screen">
                <Loading />
            </div>
        );
    }
    return (
        <Layout>
            <h2 className="text-4xl font-semibold capitalize block text-center py-5">
                Searched result for{" "}
                <span className="text-blue-800">
                    &quot;
                    {router?.query?.title}
                    &quot;
                </span>
            </h2>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10 flex ">
                <div className="w-3/5">
                    <div className="flex flex-wrap justify-center space-y-4">
                        {data?.article?.length ? (
                            data?.article?.map((v: any) => (
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
