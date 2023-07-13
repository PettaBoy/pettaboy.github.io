import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://website-server.vercel.app/",
    cache: new InMemoryCache(),
});

export default client;