export type GetPokemonsResult = {
  pokemon_v2_pokemon: {
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
  }[]
}

export interface GetPokemonsResultVariables {
  limit: number
  name: string
  offset?: number
  cacheType: string
}
