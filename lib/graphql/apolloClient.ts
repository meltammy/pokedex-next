import { ApolloClient, InMemoryCache } from '@apollo/client'

const paginatedPokemonsPolicy = {
  keyArgs: ['order'],

  merge(existing = [], incoming: unknown[]) {
    return [...existing, ...incoming]
  },
}

export const apolloClient = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache({
    typePolicies: {
      pokemon_v2_pokemon: {
        keyFields: ['id'],
      },
      Query: {
        fields: {
          pokemon_v2_pokemon: paginatedPokemonsPolicy,
        },
      },
    },
  }),
})
