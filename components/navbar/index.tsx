/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

const Navbar = () => {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center ">
                        <div className="ml-4 flex-shrink-0 flex items-center">
                            <Link href="/" passHref>
                                <a className="relative h-12 w-12">
                                    <Image
                                        className="cursor-pointer rounded-full"
                                        src="/logo.svg"
                                        alt="Workflow"
                                        layout="fill"
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="mr-4 absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 text-white space-x-4">
                        <div>user name</div>
                        <button>Logout</button>
                    </div>
                </div>
            </div>
        </Disclosure>
    );
};
export default memo(Navbar);
