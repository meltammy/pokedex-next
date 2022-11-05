import { gql } from '@apollo/client'
import { GetPokemonsName } from '../../models/GetPokemonsName'
import { apolloClient } from '../apolloClient'

export const GET_POKEMONS_NAME = gql`
  query pokemonsName {
    pokemon_v2_pokemon(limit: 906) {
      name
      id
    }
  }
`

export function fetchPokemonsName() {
  return apolloClient.query<GetPokemonsName>({
    query: GET_POKEMONS_NAME,
  })
}
