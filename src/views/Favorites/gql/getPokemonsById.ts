import { defaultPokemonFragment } from '@/lib/graphql/fragments/pokemon'
import {
  GetPokemonsByIds,
  GetPokemonsByIdsVariables,
} from '@/lib/models/GetPokemonsByIds'

import { gql, QueryHookOptions, useQuery } from '@apollo/client'

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
      order_by: { id: asc }
    ) {
      ...DefaultPokemonFragment
    }
  }
  ${defaultPokemonFragment}
`

export function useGetPokemonsByIds(
  options?: QueryHookOptions<GetPokemonsByIds, GetPokemonsByIdsVariables>
) {
  return useQuery<GetPokemonsByIds, GetPokemonsByIdsVariables>(
    GET_POKEMONS_BY_IDS,
    options
  )
}
