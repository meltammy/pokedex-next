export interface DefaultPokemon {
  id: number
  name: string
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: {
      name: string
    }
  }[]
  pokemon_v2_pokemonsprites: {
    sprites: string
  }[]
  __typename: 'pokemon_v2_pokemon'
}
