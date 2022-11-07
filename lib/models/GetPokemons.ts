import { DefaultPokemon } from './Pokemon'

export interface GetPokemonsVariables {
  limit: number
  name: string
  offset?: number
  cacheType: string
}

export type GetPokemons = {
  pokemon_v2_pokemon: DefaultPokemon[]
}
