import { useQuery } from "@apollo/client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { getCategory } from "../../query/category";
import { getSubcategory } from "../../query/subcategory";
import { articleValidationSchema } from "../../validator/index";

const initialValue = {
    title: "",
    category: "",
    subcategory: "",
    content: "",
};

const ArticleForm = () => {
    const router = useRouter();
    const [error, setError] = useState("");
    const { data: cat } = useQuery(getCategory);
    const { data: subcat } = useQuery(getSubcategory);
    const uploadArticle = async (
        value: typeof initialValue,
        { setSubmitting }: { setSubmitting: (arg0: boolean) => void }
    ) => {
        const isValid = articleValidationSchema.isValidSync(value);
        if (isValid) {
            const { title, category, subcategory, content } = value;
            console.log({ value });
        }
    };
    return (
        <Formik
            initialValues={initialValue}
            validationSchema={articleValidationSchema}
            onSubmit={uploadArticle}
            className="ease-in-out duration-1000"
        >
            {({ isSubmitting, isValid, values }) => (
                <Form className="mt-8 space-y-6 w-full">
                    <Field type="hidden" name="remember" defaultValue="true" />
                    {error && (
                        <div className="bg-red-500/70 text-white px-5 py-2 rounded-md ">
                            {error}
                        </div>
                    )}
                    <div className="rounded-md space-y-4 w-full">
                        <div className="w-full">
                            <div>
                                <label htmlFor="title" className="sr-only">
                                    Title
                                </label>
                                <Field
                                    id="title"
                                    name="title"
                                    type="title"
                                    autoComplete="title"
                                    required
                                    className="appearance-none rounded-lg relative block w-full p-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Add a title"
                                />
                                <ErrorMessage name="title">
                                    {(msg) => (
                                        <div className="text-red-500">
                                            {msg}
                                        </div>
                                    )}
                                </ErrorMessage>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center w-full">
                                <div className="w-9/12 mr-4">
                                    <Field
                                        as="select"
                                        id="category"
                                        name="category"
                                        autoComplete="category"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option>category</option>
                                        {cat?.category?.map(
                                            (v: {
                                                id: string;
                                                category_name: string;
                                            }) => (
                                                <option key={v.id}>
                                                    {v.category_name}
                                                </option>
                                            )
                                        )}
                                    </Field>
                                </div>
                                <div className="w-3/12">
                                    <button
                                        type="button"
                                        className="p-2 flex justify-center border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase"
                                    >
                                        add new
                                    </button>
                                </div>
                            </div>
                            <ErrorMessage name="category">
                                {(msg) => (
                                    <div className="text-red-500">{msg}</div>
                                )}
                            </ErrorMessage>
                        </div>
                        <div>
                            <div className="flex items-center w-full">
                                <div className="w-9/12 mr-4">
                                    <Field
                                        as="select"
                                        id="subcategory"
                                        name="subcategory"
                                        autoComplete="subcategory"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option>subcategory</option>
                                        {cat?.subcategory?.map(
                                            (v: {
                                                id: string;
                                                subcategory_name: string;
                                            }) => (
                                                <option key={v.id}>
                                                    {v.subcategory_name}
                                                </option>
                                            )
                                        )}
                                    </Field>
                                </div>
                                <div className="w-3/12">
                                    <button
                                        type="button"
                                        className="p-2 flex justify-center border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase"
                                    >
                                        add new
                                    </button>
                                </div>
                            </div>
                            <ErrorMessage name="subcategory">
                                {(msg) => (
                                    <div className="text-red-500">{msg}</div>
                                )}
                            </ErrorMessage>
                        </div>
                        <div className="w-full">
                            <div>
                                <label htmlFor="title" className="sr-only">
                                    Title
                                </label>
                                <Field
                                    as="textarea"
                                    id="content"
                                    name="content"
                                    type="content"
                                    autoComplete="content"
                                    required
                                    className="appearance-none min-h-96 rounded-lg relative block w-full p-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Add a content"
                                />
                                <ErrorMessage name="content">
                                    {(msg) => (
                                        <div className="text-red-500">
                                            {msg}
                                        </div>
                                    )}
                                </ErrorMessage>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70"
                            disabled={isSubmitting || !isValid}
                        >
                            Sign in
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ArticleForm;
