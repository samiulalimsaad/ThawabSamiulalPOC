import { useMutation, useQuery } from "@apollo/client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { addArticle } from "../../query/article";
import { getCategory } from "../../query/category";
import { getSubcategory } from "../../query/subcategory";
import { articleValidationSchema } from "../../validator/index";
import AddCategory from "./AddCategory";
import AddSubcategory from "./AddSubcategory";

const initialValue = {
    title: "",
    category: "",
    subcategory: "",
    content: "",
};

const ArticleForm = () => {
    const [error, setError] = useState({ type: false, message: "" });

    const { data: cat } = useQuery(getCategory);

    const [categoryId, setCategoryId] = useState<string>();
    const [addNewArticle, { data, loading, error: e }] =
        useMutation(addArticle);
    useEffect(() => {
        setCategoryId(cat?.category[0]?.id);
    }, [cat?.category]);

    const { data: subcat } = useQuery(getSubcategory, {
        variables: {
            id: categoryId,
        },
    });
    if (e) {
        setError({
            type: true,
            message: e.message,
        });
    }
    const uploadArticle = async (
        value: typeof initialValue,
        { setSubmitting }: { setSubmitting: (arg0: boolean) => void }
    ) => {
        const isValid = articleValidationSchema.isValidSync(value);
        if (isValid) {
            const { title, subcategory, content } = value;
            addNewArticle({
                variables: { title, content, subcategory_id: subcategory },
            });
            setSubmitting(false);
        }
    };
    return (
        <Formik
            initialValues={initialValue}
            validationSchema={articleValidationSchema}
            onSubmit={uploadArticle}
            className="ease-in-out duration-1000"
        >
            {({ isSubmitting, isValid }) => (
                <Form className="mt-8 space-y-6 w-full">
                    <Field type="hidden" name="remember" defaultValue="true" />
                    {error.message && (
                        <div
                            className={`text-white px-5 py-2 rounded-md ${
                                error.type ? "bg-red-500/70" : "bg-green-700/70"
                            }`}
                        >
                            {error.message}
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
                            <div className="flex justify-between w-full">
                                <Field
                                    as="select"
                                    id="category"
                                    setCategoryId={setCategoryId}
                                    name="category"
                                    autoComplete="category"
                                    setError={setError}
                                    cat={cat}
                                    component={AddCategory}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <ErrorMessage name="category">
                                {(msg) => (
                                    <div className="text-red-500">{msg}</div>
                                )}
                            </ErrorMessage>
                        </div>
                        <div>
                            <div className="flex items-center w-full">
                                <Field
                                    as="select"
                                    id="subcategory"
                                    name="subcategory"
                                    autoComplete="subcategory"
                                    subcat={subcat}
                                    setError={setError}
                                    component={AddSubcategory}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
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
                            Add new Article
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ArticleForm;
