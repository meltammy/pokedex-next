import { PokemonTypes } from "./pokemonTypes";

export type PokemonDetailResponse = {
  pokemon: Array<Detail>;
};

export type Detail = {
  name: string;
  id: number;
  pokemonsprites: {
    id: number;
    sprites: {
      other: {
        home: {
          front_shiny: string;
          front_female: string | null;
          front_default: string;
          front_shiny_female: string | null;
        };
        showdown: {
          back_shiny: string;
          back_female: string | null;
          front_shiny: string;
          back_default: string;
          front_female: string | null;
          front_default: string;
          back_shiny_female: string | null;
          front_shiny_female: string | null;
        };
        dream_world: {
          front_female: string | null;
          front_default: string;
        };
        "official-artwork": {
          front_shiny: string;
          front_default: string;
        };
      };
      versions: {
        [generation: string]: {
          [version: string]: {
            [key: string]:
              | string
              | null
              | {
                  [key: string]: string | null;
                };
          };
        };
      };
      back_shiny: string;
      back_female: string | null;
      front_shiny: string;
      back_default: string;
      front_female: string | null;
      front_default: string;
      back_shiny_female: string | null;
      front_shiny_female: string | null;
    };
  }[];
  pokemontypes: {
    type: {
      name: PokemonTypes;
    };
  }[];
  pokemonabilities: {
    ability: {
      name: string;
    };
  }[];
  pokemonstats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  pokemonspecy: {
    evolution_chain_id: number;
  };
};
