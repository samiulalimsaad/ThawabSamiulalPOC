import { useMutation } from "@apollo/client";
import { CheckIcon, PlusIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { addSubcategory } from "../../query/subcategory";

const AddSubCategory = ({ field, form, subcat, ...props }: any) => {
    const [state, setState] = useState(false);
    const [subcategory_name, setSubcategory_name] = useState("");
    const [addSubCat, { data, loading, error }] = useMutation(addSubcategory);
    if (state) {
        return (
            <>
                <label htmlFor="subcategory" className="sr-only">
                    Subcategory
                </label>
                <input
                    id="subcategory"
                    name="subcategory"
                    type="subcategory"
                    autoComplete="subcategory"
                    required
                    onChange={(e) => setSubcategory_name(e.target.value)}
                    className="appearance-none rounded-lg relative block w-full p-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Add a subcategory"
                />
                <button
                    type="button"
                    disabled={loading}
                    onClick={() => {
                        subcategory_name &&
                            addSubCat({
                                variables: {
                                    subcategory_name: subcategory_name,
                                    category_id: form.values.category,
                                },
                            });
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
                        form.setFieldValue("subcategory", e.target.value);
                    }}
                >
                    {subcat?.subcategory?.map(
                        (v: { id: string; subcategory_name: string }) => (
                            <option key={v.id} value={v.id}>
                                {v.subcategory_name}
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

export default AddSubCategory;
