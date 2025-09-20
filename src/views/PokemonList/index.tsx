"use client";

import { PokemonCard } from "@/components/PokemonCard";
import styles from "./PokemonList.module.scss";
import { Locale } from "@/types/locale";
import { parseLocale } from "@/lib/utils/parseLocale";
import { Pokemon } from "@/types/pokemon";
import { usePokemonList } from "@/lib/graphql/queries/listPokemons";
import { InfiniteScroll } from "@/components/InfiniteScroll";
import { useEffect, useState } from "react";

type Props = {
  initialPokemons: Pokemon[];
  locale: string;
};

const firstLimit = 20;

export function PokemonListView({ locale = "en", initialPokemons }: Props) {
  const currentLocale: Locale = parseLocale(locale);

  const [hasMore, setHasMore] = useState(true);

  const { data, fetchMore, loading } = usePokemonList({
    variables: {
      limit: firstLimit,
      offset: 0,
      cacheType: "allPokemons",
    },
    fetchPolicy: "cache-first",
  });

  const pokemons = data?.pokemon ? data?.pokemon : initialPokemons;

  function handleFetchMore() {
    if (loading) return;

    fetchMore({ variables: { offset: pokemons.length, limit: 20 } }).then(
      ({ data }) => {
        setHasMore(Boolean(data?.pokemon.length));
      }
    );
  }

  return (
    <main className={styles.mainContainer}>
      <InfiniteScroll
        fetchMore={handleFetchMore}
        hasMore={hasMore}
        initialPage={0}
        loaderClassName={styles.loader}
      >
        <section>
          {pokemons.map((item) => (
            <PokemonCard
              key={`${item.id}-${item.name}`}
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
      </InfiniteScroll>
    </main>
  );
}
