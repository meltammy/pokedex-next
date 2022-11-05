export type FormattedPokemon = {
  id: number
  name: string
  types: string[]
  sprites: string
  image: string
}

export type FormattedPokemonDetail = FormattedPokemon & {
  weight: number
  height: number
  abilities: string[]
  stats: Record<string, number>[]
}

export type FormattedPokemonEvolution = {
  evolutions: { name: string; id: number }[]
}
