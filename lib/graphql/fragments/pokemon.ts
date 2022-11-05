import { gql } from '@apollo/client'

export const defaultPokemonFragment = gql`
  fragment DefaultPokemonFragment on pokemon_v2_pokemon {
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
`
