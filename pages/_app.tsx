import {
    ApolloClient,
    ApolloProvider,
    createHttpLink,
    InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Loading from "../components/Loading";
import Navbar from "../components/navbar";
import "../styles/globals.css";

const auth0Domain = "saad-dev.us.auth0.com";
const auth0ClientId = "ZvoOpFifrI0hfayN46ikL6iSVGKNPMpC";

const hasuraUri = "https://saad-poc.hasura.app/v1/graphql";

// This code ensures that the access token from Auth0 is passed into the headers of each
// request made by Apollo.  See:
// https://community.auth0.com/t/how-to-use-react-auth0-spa-with-graphql/30516/4

const AuthorizedApolloProvider = ({ children }: any) => {
    const {
        getAccessTokenSilently,
        isLoading,
        isAuthenticated,
        loginWithPopup,
    } = useAuth0();

    if (isLoading) {
        return (
            <div className="h-screen w-screen">
                <Navbar />
                <Loading />
            </div>
        );
    } else {
        const httpLink = createHttpLink({
            uri: hasuraUri,
        });

        const authLink = setContext(async () => {
            if (isAuthenticated) {
                const token = await getAccessTokenSilently();
                return {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "content-type": "application/json",
                        "Hasura-Client-Name": "hasura-console",
                        "x-hasura-admin-secret":
                            "03yfeDPfK64N1Jxh5VDdEvSPVyw65LK5cAUv6pSu0p7jmK7BAipsN5Nl9vq28BZh",
                    },
                };
            } else {
                return {};
            }
        });

        const apolloClient = new ApolloClient({
            link: authLink.concat(httpLink),
            // uri: hasuraUri,
            cache: new InMemoryCache(),
            connectToDevTools: true,
            headers: {
                "content-type": "application/json",
                "Hasura-Client-Name": "hasura-console",
                "x-hasura-admin-secret":
                    "03yfeDPfK64N1Jxh5VDdEvSPVyw65LK5cAUv6pSu0p7jmK7BAipsN5Nl9vq28BZh",
            },
        });

        return (
            <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
        );
    }
};

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Auth0Provider
            domain={auth0Domain}
            clientId={auth0ClientId}
            cacheLocation="localstorage"
        >
            <AuthorizedApolloProvider>
                <Head>
                    <title>Hasura - demo</title>
                    <meta name="description" content="Light Media Social app" />
                    <link
                        rel="icon"
                        href="/userIcon.png"
                        sizes="any"
                        type="image/svg+xml"
                    />
                </Head>
                <main className="overflow-hidden h-screen w-screen">
                    <header>
                        <Navbar />
                    </header>
                    <Component {...pageProps} />
                </main>
            </AuthorizedApolloProvider>
        </Auth0Provider>
    );
}
export default MyApp;
