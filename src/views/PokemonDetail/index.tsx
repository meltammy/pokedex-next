"use client";

import pokemonTypes from "@/locales/pokemonTypes.json";
import { getColorsByPokemonType } from "@/lib/utils/getColorsByPokemonType";
import Image from "next/image";

import styles from "./PokemonDetailView.module.scss";
import { PokemonName } from "./components/PokemonName";
import { LikeButton } from "@/components/LikeButton";
import { Badge } from "@/components/Badge";
import { ProgressBar } from "@/components/ProgressBar";
import { useGetPokemonDetail } from "@/lib/graphql/queries/getPokemonDetails";
import { CSSProperties } from "react";
import { parseLocale } from "@/lib/utils/parseLocale";

export function formatId(id: number) {
  return `${id}`.padStart(3, "0");
}

type Props = {
  id: number;
  locale: string;
};

export function PokemonDetailView({ id, locale = "en" }: Props) {
  const { data } = useGetPokemonDetail(id);
  const currentLocale = parseLocale(locale);

  if (!data) return;
  const { pokemontypes, name, pokemonsprites, pokemonstats, pokemonabilities } =
    data.pokemon[0];

  const types = pokemontypes.map((type) => type.type.name);
  const colorType =
    types.length === 1 ? types : types.filter((type) => type !== "normal");
  const image =
    pokemonsprites[0].sprites.other["official-artwork"].front_default;

  const bgColor = getColorsByPokemonType(colorType[0]).backgroundColor;
  console.log(bgColor);

  const stats = pokemonstats.map((item) => ({
    [item.stat.name]: item.base_stat,
  }));

  const abilities = pokemonabilities.map((item) => item.ability.name);

  return (
    <div
      className={styles.container}
      style={{ "--bg-color": bgColor } as CSSProperties}
    >
      <section>
        <PokemonName name={name} />
        <div className={styles.id}>{formatId(id)}</div>
        <LikeButton />

        <div className={styles.typesContainer}>
          {types.map((type) => (
            <Badge
              key={type}
              text={pokemonTypes[type][currentLocale]}
              colors={getColorsByPokemonType(type)}
            />
          ))}
        </div>

        <div className={styles.imageContainer} id={name}>
          <Image
            layout="responsive"
            width={300}
            height={300}
            alt={name}
            src={image}
          />
        </div>

        <div className={styles.dataContainer}>
          <section>
            <div>
              <h3>Stats</h3>
              {stats.map((item) =>
                Object.entries(item).map(([label, progress]) => (
                  <ProgressBar key={label} progress={progress} label={label} />
                ))
              )}
            </div>

            <div>
              <h3>Abilities</h3>
              <span>{abilities.join(", ")}</span>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
