import { DefaultPokemon } from './Pokemon'

export interface GetPokemonsByIdsVariables {
  cacheType: string
  ids: number[]
}

export type GetPokemonsByIds = {
  pokemon_v2_pokemon: DefaultPokemon[]
}
