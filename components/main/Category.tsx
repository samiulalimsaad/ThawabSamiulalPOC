import { ArrowSmRightIcon, DocumentIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Key, useEffect, useState } from "react";
import { getSubcategory } from "../../query/subcategory";
import { categoryInterface } from "../../util/interfaces";
import Loading from "../Loading";

const Category = ({ category }: categoryInterface) => {
    const [subCategories, setSubCategories] = useState([]);
    useEffect(() => {
        (async function () {
            setSubCategories((await getSubcategory(category[0].id)) as any);
        })();
    }, [category]);
    const loadSubcategory = async (id: string) => {
        setSubCategories(await getSubcategory(id));
    };
    return (
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10 flex">
            <div className="w-3/5">
                <div className="flex flex-wrap justify-center">
                    {category?.map((v: any) => (
                        <button
                            key={v.id}
                            className="bg-white mb-4 text-red-900 px-4 border-2 border-red-900 text-lg rounded-md hover:bg-red-900 hover:text-white mx-2"
                            onClick={() => {
                                loadSubcategory(v.id);
                            }}
                        >
                            {v.category_name}
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap justify-between">
                    {subCategories?.length > 0 ? (
                        subCategories?.map((v: any) => (
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
                                    {v.articles.map(
                                        (ar: {
                                            id: Key | null | undefined;
                                            title: string;
                                        }) => (
                                            <div key={ar.id}>
                                                <Link
                                                    href={`/article/${ar.id}`}
                                                >
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
                                    <Link
                                        href={`/sub-category/${v.id}`}
                                        passHref
                                    >
                                        <a className="bg-white mb-4 text-red-900 border-2 border-red-900 text-lg rounded-md flex justify-center items-center hover:bg-red-900 hover:text-white">
                                            More
                                            <ArrowSmRightIcon className="h-6 w-6 ml-2" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="h-96 w-full">
                            <Loading />
                        </div>
                    )}
                </div>
            </div>
            <div className="w-2/5 h-[90vh] p-4">
                <div className="bg-gray-200 h-full w-full rounded-md" />
            </div>
        </div>
    );
};

export default Category;
