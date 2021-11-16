import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

export const AuthClient = new ApolloClient({
  uri: "http://localhost:4000/auth",
  cache: new InMemoryCache(),
});

// export const AppClient = new ApolloClient({
//   uri: "https://localhost:4000/api",
//   cache: new InMemoryCache(),
// });
