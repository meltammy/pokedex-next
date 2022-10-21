import { GetPokemonsResult } from '@/lib/api/getPokemons'
import { FormattedPokemon } from '@/lib/models'

export function formatPokemons(data: GetPokemonsResult): FormattedPokemon[] {
  return data.pokemon_v2_pokemon.map(item => ({
    name: item.name,
    id: item.id,
    types: item.pokemon_v2_pokemontypes.map(type => type.pokemon_v2_type.name),
    sprites: JSON.parse(item.pokemon_v2_pokemonsprites[0].sprites)
      .front_default,
  }))
}
