import Layout from "../components/Layout";
import Category from "../components/main/Category";
import Main from "../components/main/index";
import { categoryInterface } from "../util/interfaces";

const Index = ({ category }: categoryInterface) => {
    return (
        <Layout>
            <Main />
            <Category category={category} />
        </Layout>
    );
};

export default Index;
