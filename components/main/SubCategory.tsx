import { useQuery } from "@apollo/client";
import { ArrowSmRightIcon, DocumentIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Key } from "react";
import { getSubcategory } from "../../query/subcategory";
import Loading from "../Loading";

const SubCategory = ({ id }: { id: string }) => {
    console.log({ id });
    const { data, loading, error } = useQuery(getSubcategory, {
        variables: {
            id,
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
            <div className="h-full w-screen">
                <Loading />
            </div>
        );
    }
    return (
        <div className="flex flex-wrap justify-between">
            {data?.subcategory?.length > 0 ? (
                data?.subcategory?.map((v: any) => (
                    <div
                        key={v.id}
                        className="bg-white p-4 rounded-md h-auto w-80 m-2"
                    >
                        <div className="flex justify-between">
                            <div className="bg-red-900 rounded-full text-white p-2 px-4">
                                {v.articles?.length}
                            </div>
                            <div>{v.subcategory_name}</div>
                        </div>
                        <div className="py-4 text-gray-600">
                            {v?.articles?.map(
                                (ar: {
                                    id: Key | null | undefined;
                                    title: string;
                                }) => (
                                    <div key={ar.id}>
                                        <Link href={`/article/${ar.id}`}>
                                            <a className="flex">
                                                <DocumentIcon className="h-6 w-6 mr-2" />
                                                {ar.title}
                                            </a>
                                        </Link>
                                    </div>
                                )
                            )}
                        </div>
                        <div className="w-1/3">
                            <Link href={`/sub-category/${v.id}`} passHref>
                                <a className="bg-white mb-4 text-red-900 border-2 border-red-900 text-lg rounded-md flex justify-center items-center hover:bg-red-900 hover:text-white">
                                    More
                                    <ArrowSmRightIcon className="h-6 w-6 ml-2" />
                                </a>
                            </Link>
                        </div>
                    </div>
                ))
            ) : (
                <div className="h-96 w-full grid place-items-center">
                    No Data Found
                </div>
            )}
        </div>
    );
};

export default SubCategory;
