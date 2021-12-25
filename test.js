const category = [
    {
        category_name: "category 1",
        id: "dd44dd61-a9dc-4c7d-81ff-7ada7b3865b2",
    },
    {
        category_name: "category 1",
        id: "4df18bec-11e9-4cdd-90a5-9b1f4717a0cf",
    },
    {
        category_name: "category 2",
        id: "6cc55181-88be-4ad1-934a-4c0d91364824",
    },
    {
        category_name: "category 2",
        id: "7b3833c5-c05a-43e0-9d71-28f04113fcf6",
    },
    {
        category_name: "category 2",
        id: "6e98c718-4aa8-497d-ba55-78b791328bbf",
    },
    {
        category_name: "category 3",
        id: "14efc926-96ee-4d4f-aae0-d5165c7e78c7",
    },
    {
        category_name: "category 4",
        id: "0732bd1d-983e-4d3b-a1d6-af7c87bdac87",
    },
    {
        category_name: "category 4",
        id: "69c74874-ecb7-4d70-8192-62a3122be7d4",
    },
    {
        category_name: "category 4",
        id: "f36b09e3-fa64-4fbe-8a9b-1d7871f7a4a6",
    },
    {
        category_name: "category 5",
        id: "fdc44c34-57e7-4b3b-9afe-f7e01258d91b",
    },
];

const data = [...new Set(category.map((v) => v.category_name))];
console.log(data);
