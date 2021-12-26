import { gql } from "@apollo/client";

export const getCategory = gql`
    query MyQuery {
        category {
            category_name
            id
        }
    }
`;
