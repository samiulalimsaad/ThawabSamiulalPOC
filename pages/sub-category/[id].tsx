import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import { getAllArticlesFromSubcategory } from "../../query/article";

const SubCategory = () => {
    const router = useRouter() as any;
    const { data, loading, error } = useQuery(getAllArticlesFromSubcategory, {
        variables: {
            id: router?.query?.id,
        },
    });
    if (error) {
        return (
            <div>
                <pre>{JSON.stringify(error, null, 4)}</pre>
            </div>
        );
    }
    if (loading) {
        return (
            <div className="h-96 w-1/2">
                <Loading />
            </div>
        );
    }

    return (
        <Layout>
            <h2 className="text-4xl font-semibold capitalize block text-center mt-5">
                {data?.subcategory?.length > 0 &&
                    data?.subcategory[0]?.subcategory_name}
            </h2>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10 flex ">
                <div className="w-3/5">
                    <div className="flex flex-wrap justify-center space-y-4">
                        {data?.subcategory?.length > 0 &&
                        data?.subcategory[0]?.articles?.length > 0 ? (
                            data?.subcategory[0]?.articles?.map((v: any) => (
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

export default SubCategory;
