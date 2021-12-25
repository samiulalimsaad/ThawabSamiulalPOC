import type { NextPage } from "next";
import { memo } from "react";
import Layout from "../components/Layout";
import Category from "../components/main/Category";
import Main from "../components/main/index";

const Index: NextPage = () => {
    return (
        <Layout>
            <Main />
            <Category />
        </Layout>
    );
};

export default memo(Index);
