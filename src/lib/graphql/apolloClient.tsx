"use client";

import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: "https://graphql.pokeapi.co/v1beta2",
    fetch,
  }),
  cache: new InMemoryCache(),
});

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
