import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import {
  GetPokemonsResult,
  GetPokemonsResultVariables,
} from '../models/GetPokemonsResult'

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int, $cacheType: String, $name: String) {
    pokemon_v2_pokemon(
      limit: $limit
      offset: $offset
      where: { name: { _iregex: $name } }
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

export function useGetPokemonsQuery(
  options?: QueryHookOptions<GetPokemonsResult, GetPokemonsResultVariables>
) {
  return useQuery<GetPokemonsResult, GetPokemonsResultVariables>(
    GET_POKEMONS,
    options
  )
}
