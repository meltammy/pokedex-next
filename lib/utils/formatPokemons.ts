import { GetPokemons } from '../models/GetPokemons'
import {
  FormattedPokemon,
  FormattedPokemonDetail,
  FormattedPokemonEvolution,
} from '@/lib/models'
import { GetPokemonDetail } from '../models/GetPokemonDetail'
import { GetPokemonEvolution } from '../models/GetPokemonEvolution'

export function formatPokemons(data?: GetPokemons): FormattedPokemon[] {
  if (!data) return []

  return data.pokemon_v2_pokemon.map(
    ({ pokemon_v2_pokemontypes, pokemon_v2_pokemonsprites, ...res }) => {
      const imageId = formatId(res.id)

      return {
        ...res,
        types: pokemon_v2_pokemontypes.map(type => type.pokemon_v2_type.name),
        sprites: JSON.parse(pokemon_v2_pokemonsprites[0].sprites).front_default,
        image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`,
      }
    }
  )
}

export function formatPokemonDetail({
  pokemon_v2_pokemon,
}: GetPokemonDetail): FormattedPokemonDetail {
  const {
    pokemon_v2_pokemontypes,
    pokemon_v2_pokemonabilities,
    pokemon_v2_pokemonsprites,
    pokemon_v2_pokemonstats,
    pokemon_v2_pokemonspecy,
    ...res
  } = pokemon_v2_pokemon[0]

  const imageId = formatId(res.id)

  return {
    ...res,
    types: pokemon_v2_pokemontypes.map(type => type.pokemon_v2_type.name),
    sprites: JSON.parse(pokemon_v2_pokemonsprites[0].sprites).front_default,
    abilities: pokemon_v2_pokemonabilities.map(
      ({ pokemon_v2_ability: ability }) => ability.name
    ),
    stats: pokemon_v2_pokemonstats.map(item => ({
      [formatStatsLabel(item.pokemon_v2_stat.name)]: item.base_stat,
    })),
    image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageId}.png`,
    evolutionId: pokemon_v2_pokemonspecy.evolution_chain_id,
  }
}

const labelsToReplace = [
  {
    includes: 'special',
    replace: 'sp.',
  },
  {
    includes: '-attack',
    replace: ' atk',
  },
  {
    includes: '-defense',
    replace: ' def',
  },
  {
    includes: 'hp',
    replace: 'HP',
  },
]

function formatStatsLabel(label: string) {
  let newLabel = label

  labelsToReplace.forEach(({ includes, replace }) => {
    if (newLabel.includes(includes))
      newLabel = newLabel.replace(includes, replace)
  })

  return newLabel
}

export function formatPokemonEvolution({
  pokemon_v2_evolutionchain,
}: GetPokemonEvolution): FormattedPokemonEvolution {
  return {
    evolutions: pokemon_v2_evolutionchain[0].pokemon_v2_pokemonspecies.map(
      ({ id, name }) => ({
        image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatId(
          id
        )}.png`,
        name,
      })
    ),
  }
}

export function formatId(id: number) {
  return `${id}`.padStart(3, '0')
}
