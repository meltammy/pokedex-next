import {
  GetPokemonEvolution,
  GetPokemonEvolutionVariables,
} from '@/lib/models/GetPokemonEvolution'
import { formatPokemonEvolution } from '@/lib/utils/formatPokemons'
import { gql, QueryHookOptions, useQuery } from '@apollo/client'

export const GET_POKEMON_EVOLUTION = gql`
  query pokemonsByIds($id: Int) {
    pokemon_v2_evolutionchain(where: { id: { _eq: $id } }) {
      pokemon_v2_pokemonspecies {
        name
        id
      }
    }
  }
`

export function useGetPokemonEvolutionQuery(
  options?: QueryHookOptions<GetPokemonEvolution, GetPokemonEvolutionVariables>
) {
  const { data: rawData, ...res } = useQuery<
    GetPokemonEvolution,
    GetPokemonEvolutionVariables
  >(GET_POKEMON_EVOLUTION, options)

  const data = rawData ? formatPokemonEvolution(rawData) : rawData

  return {
    data,
    ...res,
  }
}
