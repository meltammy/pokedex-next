"use client";

import { PokemonCard } from "@/components/PokemonCard";
import { useListPokemons } from "@/lib/graphql/queries/listPokemons";
import styles from "./PokemonList.module.scss";
import { Locale } from "@/types/locale";
import { parseLocale } from "@/lib/utils/parseLocale";

export function PokemonList({ locale = "en" }) {
  const currentLocale: Locale = parseLocale(locale);

  const { data } = useListPokemons();

  if (!data) return null;

  return (
    <main className={styles.mainContainer}>
      <section>
        {data.pokemon.map((item) => (
          <PokemonCard
            key={item.id}
            id={item.id}
            name={item.name}
            image={
              item.pokemonsprites[0].sprites.other["official-artwork"]
                .front_default
            }
            types={item.pokemontypes.map((type) => type.type.name)}
            locale={currentLocale}
          />
        ))}
      </section>
    </main>
  );
}
