import { PokemonDetailResponse } from "@/types/pokemonDetail";
import { gql } from "@apollo/client";
import { client } from "../apolloClient";
import { useQuery } from "@apollo/client/react";

export const GET_POKEMON_DETAIL = gql`
  query pokemonDetail($id: Int) {
    pokemon(where: { id: { _eq: $id } }) {
      name
      id
      pokemonsprites {
        id
        sprites
      }
      pokemontypes {
        type {
          name
        }
      }
      pokemonabilities {
        ability {
          name
        }
      }
      pokemonstats {
        base_stat
        stat {
          name
        }
      }
      pokemonspecy {
        evolution_chain_id
      }
    }
  }
`;

export function useGetPokemonDetail(id: number) {
  return useQuery<PokemonDetailResponse, { id: number }>(GET_POKEMON_DETAIL, {
    variables: { id },
  });
}
