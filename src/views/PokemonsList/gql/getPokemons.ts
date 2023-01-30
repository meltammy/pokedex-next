import { defaultPokemonFragment } from '@/lib/graphql/fragments/pokemon'
import { GetPokemons, GetPokemonsVariables } from '@/lib/models/GetPokemons'
import { gql, QueryHookOptions, useQuery } from '@apollo/client'

export const GET_POKEMONS = gql`
  query pokemons(
    $limit: Int
    $offset: Int
    $name: String
    $ids: [Int]
    $types: [String]
    $orderBy: [pokemon_v2_pokemon_order_by!]
    $maxId: Int
    $cacheType: String
  ) {
    pokemon_v2_pokemon(
      limit: $limit
      offset: $offset
      where: {
        name: { _iregex: $name }
        id: { _lte: $maxId }
        pokemon_v2_pokemontypes: { pokemon_v2_type: { name: { _in: $types } } }
      }
      order_by: $orderBy
    ) {
      ...DefaultPokemonFragment
    }
  }
  ${defaultPokemonFragment}
`

export function useGetPokemons(
  options?: QueryHookOptions<GetPokemons, GetPokemonsVariables>
) {
  return useQuery<GetPokemons, GetPokemonsVariables>(GET_POKEMONS, options)
}
