import { PokemonResponse } from "@/types/pokemon";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { apolloClient } from "../apolloClient";

const query = gql`
  query ListPokemons($limit: Int!, $offset: Int!) {
    pokemon(limit: $limit, offset: $offset) {
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

type Variables = { limit: number; offset: number; cacheType: string };

export const usePokemonList = (
  options: useQuery.Options<PokemonResponse, Variables>
) => useQuery<PokemonResponse, Variables>(query, options);

export function fetchPokemonList(variables: Variables) {
  return apolloClient.query<PokemonResponse, Variables>({
    query,
    variables,
  });
}
