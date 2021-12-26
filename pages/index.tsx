import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Category from "../components/main/Category";
import Main from "../components/main/index";
import { getCategory } from "../query/category";
import { categoryInterface } from "../util/interfaces";

const Index = ({ category }: categoryInterface) => {
    if (!category) {
        return <Loading />;
    }
    return (
        <Layout>
            <Main />
            <Category category={category} />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { category } = await getCategory();

    return {
        props: {
            category,
        },
    };
};

export default Index;
