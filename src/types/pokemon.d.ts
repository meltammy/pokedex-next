export type PokemonResponse = {
  pokemon: Array<Pokemon>;
};

export type Pokemon = {
  name: string;
  id: number;
  pokemonsprites: Array<PokemonSprites>;
  pokemontypes: Array<PokemonType>;
};

export type PokemonSprites = {
  id: number;
  sprites: {
    other: {
      home: {
        front_shiny: string | null;
        front_female: string | null;
        front_default: string;
        front_shiny_female: string | null;
      };
      showdown: {
        back_shiny: string | null;
        back_female: string | null;
        front_shiny: string | null;
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
        front_shiny: string | null;
        front_default: string;
      };
    };
    versions: {
      [generation: string]: {
        [version: string]: {
          animated?: {
            back_shiny: string | null;
            back_female: string | null;
            front_shiny: string | null;
            back_default: string;
            front_female: string | null;
            front_default: string;
            back_shiny_female: string | null;
            front_shiny_female: string | null;
          };
          back_shiny: string | null;
          back_female: string | null;
          front_shiny: string | null;
          back_default: string;
          front_female: string | null;
          front_default: string;
          back_shiny_female?: string | null;
          front_shiny_female?: string | null;
        };
      };
    };
    back_shiny: string | null;
    back_female: string | null;
    front_shiny: string | null;
    back_default: string;
    front_female: string | null;
    front_default: string;
    back_shiny_female: string | null;
    front_shiny_female: string | null;
  };
};

export type PokemonType = {
  type: {
    name: PokemonTypes;
  };
};
