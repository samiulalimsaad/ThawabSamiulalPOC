import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Category from "../components/main/Category";
import Main from "../components/main/index";
import { categoryInterface } from "../util/interfaces";

const Index = ({ category }: categoryInterface) => {
    const { isAuthenticated } = useAuth0();
    const router = useRouter();
    if (!isAuthenticated) {
        router.push("/login");
    }
    return (
        <Layout>
            <Main />
            <Category category={category} />
        </Layout>
    );
};

export default Index;
