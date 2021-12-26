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
