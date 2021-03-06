import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading";

const Layout = ({ children }: { children: any }) => {
    const { isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <Loading />;
    }

    if (!isAuthenticated) {
        // Router.push('/login');
        return null;
    }

    return (
        <section className="w-screen h-full bg-gray-100">{children}</section>
    );
};

export default Layout;
