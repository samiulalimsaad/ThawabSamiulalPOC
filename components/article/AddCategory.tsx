import { useMutation } from "@apollo/client";
import { CheckIcon, PlusIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { addCategory } from "../../query/category";

const AddCategory = ({ field, setCategoryId, form, cat, ...props }: any) => {
    const [state, setState] = useState(false);
    const [category_name, setCategory_name] = useState("");
    const [addCat, { data, loading, error }] = useMutation(addCategory);
    if (state) {
        return (
            <>
                <label htmlFor="category" className="sr-only">
                    Category
                </label>
                <input
                    id="category"
                    name="category"
                    type="category"
                    autoComplete="category"
                    required
                    onChange={(e) => setCategory_name(e.target.value)}
                    className="appearance-none rounded-lg relative block w-full p-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Add a category"
                />
                <button
                    type="button"
                    disabled={loading}
                    onClick={() => {
                        category_name &&
                            addCat({ variables: { category_name } });
                        setState(false);
                    }}
                    className="ml-2 p-2 flex justify-center border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 uppercase"
                >
                    <CheckIcon className="h-6 w-6" />
                </button>
                {error && <div className="text-red-500">{error.message}</div>}
            </>
        );
    } else {
        return (
            <>
                <select
                    {...field}
                    {...props}
                    onChange={(e) => {
                        setCategoryId(e.target.value);
                        form.setFieldValue("category", e.target.value);
                    }}
                >
                    {cat?.category?.map(
                        (v: { id: string; category_name: string }) => (
                            <option key={v.id} value={v.id}>
                                {v.category_name}
                            </option>
                        )
                    )}
                </select>
                <button
                    type="button"
                    onClick={() => setState(true)}
                    className="ml-2 p-2 flex justify-center border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase"
                >
                    <PlusIcon className="h-6 w-6" />
                </button>
            </>
        );
    }
};

export default AddCategory;
