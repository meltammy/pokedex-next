import { gql, QueryHookOptions, useQuery } from '@apollo/client'

export type GetPokemonsResult = {
  pokemon_v2_pokemon: {
    id: number
    name: string
    pokemon_v2_pokemontypes: {
      pokemon_v2_type: {
        name: string
      }
    }[]
    __typename: 'pokemon_v2_pokemon'
  }[]
}

export const GET_POKEMONS = gql`
  query pokemons {
    pokemon_v2_pokemon(limit: 100) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`

export function useGetUserQuery(options?: QueryHookOptions<GetPokemonsResult>) {
  return useQuery<GetPokemonsResult>(GET_POKEMONS, {
    ...options,
  })
}