export type GetPokemonEvolution = {
  pokemon_v2_evolutionchain: {
    pokemon_v2_pokemonspecies: {
      name: string
      id: number
    }[]
  }[]
}

export type GetPokemonEvolutionVariables = {
  id: number | null
}
