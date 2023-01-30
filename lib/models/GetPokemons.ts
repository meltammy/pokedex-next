import { DefaultPokemon } from './Pokemon'

export interface GetPokemonsVariables {
  limit: number
  name: string
  offset?: number
  cacheType: string
  types: string[] | null
  maxId: number
  orderBy?: Record<string, 'asc'>
}

export type GetPokemons = {
  pokemon_v2_pokemon: DefaultPokemon[]
}
