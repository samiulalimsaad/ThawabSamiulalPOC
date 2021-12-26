/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { useAuth0 } from "@auth0/auth0-react";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Loading from "../Loading";

const Navbar = () => {
    const { user, isAuthenticated, isLoading, logout, loginWithPopup } =
        useAuth0();
    if (isLoading) {
        return <Loading />;
    }
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
                        {isAuthenticated ? (
                            <button
                                className="border-2 border-red-900 px-4 text-lg rounded-md hover:bg-red-900 hover:text-white mx-2"
                                onClick={() =>
                                    logout({ returnTo: window.location.origin })
                                }
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                className="border-2 border-red-900 px-4 text-lg rounded-md hover:bg-red-900 hover:text-white mx-2"
                                onClick={() => loginWithPopup()}
                            >
                                Login
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </Disclosure>
    );
};
export default Navbar;
