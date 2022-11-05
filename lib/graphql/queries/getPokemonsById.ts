import {
  GetPokemonsByIds,
  GetPokemonsByIdsVariables,
} from '@/lib/models/GetPokemonsByIds'

import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { defaultPokemonFragment } from '../fragments/pokemon'

export const GET_POKEMONS_BY_IDS = gql`
  query pokemonsByIds(
    $limit: Int
    $offset: Int
    $ids: [Int]
    $cacheType: String
  ) {
    pokemon_v2_pokemon(
      limit: $limit
      offset: $offset
      where: { id: { _in: $ids } }
    ) {
      ...DefaultPokemonFragment
    }
  }
  ${defaultPokemonFragment}
`

export function useGetPokemonsByIdsQuery(
  options?: QueryHookOptions<GetPokemonsByIds, GetPokemonsByIdsVariables>
) {
  return useQuery<GetPokemonsByIds, GetPokemonsByIdsVariables>(
    GET_POKEMONS_BY_IDS,
    options
  )
}
