import { DefaultPokemon } from './Pokemon'

interface PokemonDetail extends DefaultPokemon {
  weight: number
  height: number
  pokemon_v2_pokemonabilities: {
    pokemon_v2_ability: {
      name: string
    }
  }[]
  pokemon_v2_pokemonstats: {
    base_stat: number
    pokemon_v2_stat: {
      name: string
    }
  }[]
}

export type GetPokemonDetail = {
  pokemon_v2_pokemon: PokemonDetail[]
}

export type GetPokemonDetailVariables = {
  name: string
}
