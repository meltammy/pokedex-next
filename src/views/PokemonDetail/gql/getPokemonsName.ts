import { apolloClient } from '@/lib/graphql/apolloClient'
import { GetPokemonsName } from '@/lib/models/GetPokemonsName'
import { gql } from '@apollo/client'

export const GET_POKEMONS_NAME = gql`
  query pokemonsName($maxId: Int) {
    pokemon_v2_pokemon(limit: $maxId) {
      name
      id
    }
  }
`

export function fetchPokemonsName() {
  return apolloClient.query<GetPokemonsName>({
    query: GET_POKEMONS_NAME,
    variables: { maxId: process.env.NEXT_PUBLIC_MAX_ID },
  })
}
