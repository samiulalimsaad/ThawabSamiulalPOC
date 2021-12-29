import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import { getArticle } from "../../query/article";

const Article = () => {
    const router = useRouter() as any;
    const { data, loading, error } = useQuery(getArticle, {
        variables: {
            id: router?.query?.id,
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
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10 flex">
                <div className="w-3/5">
                    <div className="w-full h-full bg-white space-y-4 px-4">
                        <h2 className="text-2xl font-semibold pt-4">
                            {data?.article?.length && data?.article[0]?.title}
                        </h2>
                        <div className="mt-4">
                            <p className="text-gray-600">
                                {data?.article?.length &&
                                    data?.article[0]?.content}
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
