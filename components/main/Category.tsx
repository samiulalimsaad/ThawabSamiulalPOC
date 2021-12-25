import { ArrowSmRightIcon, DocumentIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Category = () => {
    return (
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10 flex">
            <div className="w-3/5">
                <div className="flex flex-wrap justify-center space-x-4">
                    {`consectetur adipisicing veritatis veniam eveniet dignissimos voluptates aspernatur animirepellat possimus`
                        .split(" ")
                        .map((v) => (
                            <button
                                key={v}
                                className="bg-white mb-4 text-pink-900 px-4 border-2 border-pink-900 text-lg rounded-md hover:bg-pink-900 hover:text-white"
                            >
                                {v}
                            </button>
                        ))}
                </div>
                <div className="flex flex-wrap justify-center">
                    {`consectetur adipisicing veritatis veniam eveniet dignissimos voluptates aspernatur animirepellat possimus`
                        .split(" ")
                        .map((v) => (
                            <div
                                key={v}
                                className="bg-white p-4 rounded-md h-auto w-80 m-2"
                            >
                                <div className="flex justify-between">
                                    <div className="bg-pink-900 rounded-full text-white p-2 px-4">
                                        4
                                    </div>
                                    <div>{v}</div>
                                </div>
                                <div className="py-4 text-gray-600">
                                    {`consectetur adipisicing veritatis veniam eveniet dignissimos`
                                        .split(" ")
                                        .map((v) => (
                                            <div key={v}>
                                                <Link href="/article/id">
                                                    <a className="flex">
                                                        <DocumentIcon className="h-6 w-6 mr-2" />
                                                        {v}
                                                    </a>
                                                </Link>
                                            </div>
                                        ))}
                                </div>
                                <div className="w-1/3">
                                    <Link href="/sub-category/id" passHref>
                                        <a className="bg-white mb-4 text-pink-900 border-2 border-pink-900 text-lg rounded-md flex justify-center items-center hover:bg-pink-900 hover:text-white">
                                            More
                                            <ArrowSmRightIcon className="h-6 w-6 ml-2" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="w-2/5 h-[90vh] p-4">
                <div className="bg-gray-200 h-full w-full rounded-md" />
            </div>
        </div>
    );
};

export default Category;
