import {
  ApolloClient,
  FieldFunctionOptions,
  InMemoryCache,
  makeVar,
} from '@apollo/client'

const paginatedPokemonsPolicy = {
  keyArgs: ['$cacheType', '$name'],
  merge(
    existing = [],
    incoming: unknown[],
    fieldOptions: FieldFunctionOptions<
      Record<string, unknown>,
      Record<string, unknown>
    >
  ) {
    const limit = Number(fieldOptions.args?.limit)
    hasMoreVar(Boolean(incoming.length === limit))

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

export const hasMoreVar = makeVar(true)
