import { GetPokemons } from '../models/GetPokemonsResult'
import {
  FormattedPokemon,
  FormattedPokemonDetail,
  FormattedPokemonEvolution,
} from '@/lib/models'
import { GetPokemonDetail } from '../models/GetPokemonDetail'
import { GetPokemonEvolution } from '../models/GetPokemonEvolution'

export function formatPokemons(data?: GetPokemons): FormattedPokemon[] {
  if (!data) return []

  return data.pokemon_v2_pokemon.map(item => {
    const imageId = `${item.id}`.padStart(3, '0')

    return {
      name: item.name,
      id: item.id,
      types: item.pokemon_v2_pokemontypes.map(
        type => type.pokemon_v2_type.name
      ),
      sprites: JSON.parse(item.pokemon_v2_pokemonsprites[0].sprites)
        .front_default,
      image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`,
    }
  })
}

export function formatPokemonDetail({
  pokemon_v2_pokemon,
}: GetPokemonDetail): FormattedPokemonDetail {
  const {
    pokemon_v2_pokemontypes,
    pokemon_v2_pokemonabilities,
    pokemon_v2_pokemonsprites,
    pokemon_v2_pokemonstats,
    ...res
  } = pokemon_v2_pokemon[0]

  const imageId = `${res.id}`.padStart(3, '0')

  return {
    ...res,
    types: pokemon_v2_pokemontypes.map(type => type.pokemon_v2_type.name),
    sprites: JSON.parse(pokemon_v2_pokemonsprites[0].sprites).front_default,
    abilities: pokemon_v2_pokemonabilities.map(
      ({ pokemon_v2_ability: ability }) => ability.name
    ),
    stats: pokemon_v2_pokemonstats.map(item => ({
      [item.pokemon_v2_stat.name]: item.base_stat,
    })),
    image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`,
  }
}

export function formatPokemonEvolution({
  pokemon_v2_evolutionchain,
}: GetPokemonEvolution): FormattedPokemonEvolution {
  return {
    evolutions: pokemon_v2_evolutionchain[0].pokemon_v2_pokemonspecies,
  }
}
