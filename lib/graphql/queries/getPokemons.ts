import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import {
  GetPokemons,
  GetPokemonsVariables,
} from '../../models/GetPokemonsResult'
import { defaultPokemonFragment } from '../fragments/pokemon'

export const GET_POKEMONS = gql`
  query pokemons(
    $limit: Int
    $offset: Int
    $cacheType: String
    $name: String
    $ids: [Int]
  ) {
    pokemon_v2_pokemon(
      limit: $limit
      offset: $offset
      where: { name: { _iregex: $name }, id: { _lte: 906 } }
    ) {
      ...DefaultPokemonFragment
    }
  }
  ${defaultPokemonFragment}
`

export function useGetPokemonsQuery(
  options?: QueryHookOptions<GetPokemons, GetPokemonsVariables>
) {
  return useQuery<GetPokemons, GetPokemonsVariables>(GET_POKEMONS, options)
}
