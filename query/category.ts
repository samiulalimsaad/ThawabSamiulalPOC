import { gql, request } from "graphql-request";

export const getCategory = async () => {
    const query = gql`
        query MyQuery {
            category {
                category_name
                id
            }
        }
    `;

    const data = await request(
        "https://saad-poc.hasura.app/v1/graphql",
        query,
        null,
        {
            "content-type": "application/json",
            "Hasura-Client-Name": "hasura-console",
            "x-hasura-admin-secret":
                "03yfeDPfK64N1Jxh5VDdEvSPVyw65LK5cAUv6pSu0p7jmK7BAipsN5Nl9vq28BZh",
        }
    );
    // console.log(JSON.stringify(data, null, 4));
    return data;
};
