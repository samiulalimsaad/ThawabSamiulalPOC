/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { useUser } from "@auth0/nextjs-auth0";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

const Navbar = () => {
    const { user } = useUser();
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
                        <div className="flex space-x-2 items-center">
                            <div className="relative h-8 w-8 overflow-hidden">
                                <img
                                    className="rounded-full bg-white overflow-hidden object-center object-cover"
                                    src={user?.picture || "/userIcon.png"}
                                    alt={user?.name || "user"}
                                />
                            </div>
                            <div>{user?.name}</div>
                        </div>
                        <Link href="api/auth/logout" passHref>
                            <a className="border-2 border-red-900 px-4 text-lg rounded-md hover:bg-red-900 hover:text-white mx-2">
                                Logout
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Disclosure>
    );
};
export default memo(Navbar);
