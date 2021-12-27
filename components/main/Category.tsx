import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { getCategory } from "../../query/category";
import { categoryInterface } from "../../util/interfaces";
import Article from "../article";
import Loading from "../Loading";
import SubCategory from "./SubCategory";

const Category = ({ category }: categoryInterface) => {
    const { data, loading, error } = useQuery(getCategory);
    const [subCategoryId, setSubCategoryId] = useState<string>();
    useEffect(() => {
        setSubCategoryId(data?.category[0]?.id);
    }, [data?.category]);
    const loadSubcategory = async (id: string) => {
        setSubCategoryId(id);
    };
    if (error) {
        return (
            <div>
                <pre>{JSON.stringify(error, null, 4)}</pre>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10 flex">
            <div className="w-3/5">
                <div className="flex flex-wrap justify-center">
                    {data ? (
                        data?.category?.map((v: any) => (
                            <button
                                key={v.id}
                                className="bg-white mb-4 text-red-900 px-4 border-2 border-red-900 text-lg rounded-md hover:bg-red-900 hover:text-white mx-2"
                                onClick={() => {
                                    loadSubcategory(v.id);
                                }}
                            >
                                {v.category_name}
                            </button>
                        ))
                    ) : (
                        <div className="h-96 w-screen">
                            <Loading />
                        </div>
                    )}
                </div>
                <div>
                    {subCategoryId && <SubCategory id={subCategoryId!} />}
                </div>
            </div>
            <div className="w-2/5 h-[90vh] px-4">
                <div className="bg-gray-200 h-full w-full rounded-md">
                    <Article />
                </div>
            </div>
        </div>
    );
};

export default Category;
