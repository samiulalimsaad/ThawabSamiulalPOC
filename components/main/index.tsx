import Link from "next/link";
import { useState } from "react";

const Main = () => {
    const [state, setState] = useState("");

    return (
        <div className="h-[50vh] bg-red-900 grid place-items-center">
            <div className="space-y-7 text-center">
                <h1 className="text-5xl text-white">Lorem ipsum dolor sit</h1>
                <h3 className="text-xl text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                </h3>
                <div>
                    <form className="space-x-4 flex">
                        <input
                            type="text"
                            placeholder="search for articles"
                            onChange={(e) => {
                                setState(e.target.value);
                            }}
                            className="appearance-none rounded-md relative block w-full p-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        />
                        <Link href={`/search/${state}`} passHref>
                            <a className="bg-red-700 text-white px-4 rounded-md hover:text-red-900 hover:bg-white flex items-center">
                                Search
                            </a>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Main;
