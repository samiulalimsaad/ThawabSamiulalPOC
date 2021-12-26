import { gql, request } from "graphql-request";

export const getSubcategory = async (id: string) => {
    const query = gql`
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

    const { subcategory } = await request(
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
    // console.log(JSON.stringify(data, null, 4));
    return subcategory;
};
