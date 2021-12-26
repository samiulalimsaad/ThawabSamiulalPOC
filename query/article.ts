import { gql, request } from "graphql-request";

export const getArticle = async (id: string) => {
    const query = gql`
        query MyQuery($id: uuid!) {
            article(where: { id: { _eq: $id } }) {
                content
                title
                id
            }
        }
    `;

    const article = await request(
        "https://saad-poc.hasura.app/v1/graphql",
        query,
        { id },
        {
            "content-type": "application/json",
            "Hasura-Client-Name": "hasura-console",
            "x-hasura-admin-secret":
                "03yfeDPfK64N1Jxh5VDdEvSPVyw65LK5cAUv6pSu0p7jmK7BAipsN5Nl9vq28BZh",
        }
    );
    return article;
};

export const getSearchedArticle = async (title: string) => {
    const query = gql`
        query MyQuery($title: String!) {
            article(where: { title: { _regex: $title } }) {
                title
                id
                content
            }
        }
    `;

    const article = await request(
        "https://saad-poc.hasura.app/v1/graphql",
        query,
        { title },
        {
            "content-type": "application/json",
            "Hasura-Client-Name": "hasura-console",
            "x-hasura-admin-secret":
                "03yfeDPfK64N1Jxh5VDdEvSPVyw65LK5cAUv6pSu0p7jmK7BAipsN5Nl9vq28BZh",
        }
    );
    return article;
};

export const getAllArticlesFromSubcategory = async (id: string) => {
    const query = gql`
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

    const data = await request(
        "https://saad-poc.hasura.app/v1/graphql",
        query,
        { id },
        {
            "content-type": "application/json",
            "Hasura-Client-Name": "hasura-console",
            "x-hasura-admin-secret":
                "03yfeDPfK64N1Jxh5VDdEvSPVyw65LK5cAUv6pSu0p7jmK7BAipsN5Nl9vq28BZh",
        }
    );
    return data;
};
