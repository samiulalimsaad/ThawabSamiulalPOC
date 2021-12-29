import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import Loading from "../components/Loading";

function Login() {
    const { isAuthenticated } = useAuth0();
    const router = useRouter();
    if (isAuthenticated) {
        router.push("/");
    }
    if (!isAuthenticated) {
        return (
            <section className="h-screen w-screen grid place-items-center ">
                Not Authenticated Please Login before access
            </section>
        );
    }
    return (
        <section className="h-screen w-screen grid place-items-center">
            <Loading />
        </section>
    );
}

export default Login;
