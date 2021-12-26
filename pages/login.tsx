import { useRouter } from "next/router";
import { useEffect } from "react";
import Loading from "../components/Loading";

function Login() {
    const router = useRouter();
    useEffect(() => {
        router.push("/api/auth/login");
    }, [router]);

    return (
        <section className="h-screen w-screen">
            <Loading />
        </section>
    );
}

export default Login;
