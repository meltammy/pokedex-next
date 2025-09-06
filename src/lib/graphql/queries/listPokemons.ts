import { PokemonResponse } from "@/types/pokemon";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const query = gql`
  query ListPokemons {
    pokemon(limit: 151) {
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
    }
  }
`;

export const useListPokemons = () => useQuery<PokemonResponse>(query);
