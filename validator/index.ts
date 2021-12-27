import * as Yup from "yup";

export const articleValidationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    category: Yup.string().required("Category is required"),
    subcategory: Yup.string().required("SubCategory is required"),
    content: Yup.string().required("Content is required"),
});
