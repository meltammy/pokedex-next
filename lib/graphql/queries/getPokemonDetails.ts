import {
  GetPokemonDetail,
  GetPokemonDetailVariables,
} from '@/lib/models/GetPokemonDetail'
import { gql } from '@apollo/client'
import { apolloClient } from '../apolloClient'
import { defaultPokemonFragment } from '../fragments/pokemon'

export const GET_POKEMON_DETAIL = gql`
  query pokemonDetail($name: String) {
    pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
      ...DefaultPokemonFragment
      weight
      height
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
    }
  }
  ${defaultPokemonFragment}
`

export function fetchPokemonDetail(name: string) {
  return apolloClient.query<GetPokemonDetail, GetPokemonDetailVariables>({
    query: GET_POKEMON_DETAIL,
    variables: { name },
  })
}
