import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import withApollo from "next-with-apollo";
import { setContext } from "apollo-link-context";
import Cookies from "js-cookie";
import { createUploadLink } from "apollo-upload-client";

const GRAPHQL_URL = process.env.GRAPHQL;

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : ""
    }
  };
});

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: authLink.concat(createUploadLink({ uri: GRAPHQL_URL })),
      cache: new InMemoryCache().restore(initialState || {})
    })
);
