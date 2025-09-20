import { FieldFunctionOptions } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";

const paginatedPokemonsPolicy = {
  keyArgs: ["$id", "$cacheType"],

  merge(existing: { __ref: string }[] = [], incoming: { __ref: string }[]) {
    return [...existing, ...incoming];
  },
};

export const apolloClient = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: "https://graphql.pokeapi.co/v1beta2",
    fetch,
  }),
  cache: new InMemoryCache({
    typePolicies: {
      pokemon: {
        keyFields: ["id"],
      },
      Query: {
        fields: {
          pokemon: paginatedPokemonsPolicy,
        },
      },
    },
  }),
});
