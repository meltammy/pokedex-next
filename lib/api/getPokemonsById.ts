import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { GetPokemonsResult } from '../models/GetPokemonsResult'

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
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`

export function useGetPokemonsByIdsQuery(
  options?: QueryHookOptions<GetPokemonsResult>
) {
  return useQuery<GetPokemonsResult>(GET_POKEMONS_BY_IDS, {
    ...options,
  })
}
