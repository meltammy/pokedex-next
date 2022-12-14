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
  evolutionId: number | null
}

export type FormattedPokemonEvolution = {
  evolutions: { name: string; image: string }[]
}
