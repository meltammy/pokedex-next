import {
  GetNextPrevPokemons,
  GetNextPrevPokemonsVariables,
} from '@/lib/models/GetNextPrevPokemons'
import { gql, QueryHookOptions, useQuery } from '@apollo/client'

export const GET_POKEMONS_BY_IDS = gql`
  query nextPrevPokemons($ids: [Int]) {
    pokemon_v2_pokemon(where: { id: { _in: $ids } }) {
      name
      id
    }
  }
`

export function useNextPrevPokemons(
  options?: QueryHookOptions<GetNextPrevPokemons, GetNextPrevPokemonsVariables>
) {
  return useQuery<GetNextPrevPokemons, GetNextPrevPokemonsVariables>(
    GET_POKEMONS_BY_IDS,
    options
  )
}
