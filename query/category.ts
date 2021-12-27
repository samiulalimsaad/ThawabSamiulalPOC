import { gql } from "@apollo/client";

export const getCategory = gql`
    query MyQuery {
        category {
            category_name
            id
        }
    }
`;

export const addCategory = gql`
    mutation MyQuery($category_name: String!) {
        insert_category_one(object: { category_name: $category_name }) {
            category_name
            id
        }
    }
`;
