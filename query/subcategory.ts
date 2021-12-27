import { gql } from "@apollo/client";

export const getSubcategory = gql`
    query MyQuery($id: uuid!) {
        subcategory(where: { category_id: { _eq: $id } }) {
            subcategory_name
            id
            articles {
                title
                id
            }
        }
    }
`;

export const addSubcategory = gql`
    mutation MyQuery($subcategory_name: String!, $category_id: String!) {
        insert_subcategory_one(
            object: {
                subcategory_name: $subcategory_name
                category_id: $category_id
            }
        ) {
            subcategory_name
            category {
                category_name
            }
        }
    }
`;
