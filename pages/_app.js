import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "./services/apolloService";

// function NextJsApollo({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

function NextJsApolloClient({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default NextJsApolloClient;
