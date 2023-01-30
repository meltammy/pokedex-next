import { apolloClient } from '@/lib/graphql/apolloClient'
import { defaultPokemonFragment } from '@/lib/graphql/fragments/pokemon'
import {
  GetPokemonDetail,
  GetPokemonDetailVariables,
} from '@/lib/models/GetPokemonDetail'
import { gql } from '@apollo/client'

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
      pokemon_v2_pokemonspecy {
        evolution_chain_id
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
