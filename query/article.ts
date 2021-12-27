import { gql } from "@apollo/client";

export const getArticle = gql`
    query MyQuery($id: uuid!) {
        article(where: { id: { _eq: $id } }) {
            content
            title
            id
        }
    }
`;

export const getSearchedArticle = gql`
    query MyQuery($title: String!) {
        article(where: { title: { _regex: $title } }) {
            title
            id
            content
        }
    }
`;

export const getAllArticlesFromSubcategory = gql`
    query MyQuery($id: uuid!) {
        subcategory(where: { id: { _eq: $id } }) {
            subcategory_name
            id
            articles {
                id
                title
                content
            }
        }
    }
`;

export const addArticle = gql`
    mutation MyQuery(
        $title: String!
        $content: String!
        $subcategory_id: uuid!
    ) {
        insert_article_one(
            object: {
                title: $title
                content: $content
                subcategory_id: $subcategory_id
            }
        ) {
            title
            content
            subcategory {
                subcategory_name
                category {
                    category_name
                }
            }
        }
    }
`;
