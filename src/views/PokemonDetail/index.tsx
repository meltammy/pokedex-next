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
import { pokemonDetailDictionaries } from "@/locales/pokemonDetail";
import OutlinedText from "@/components/OutlinedText";

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

  const dictionary =
    pokemonDetailDictionaries[currentLocale] || pokemonDetailDictionaries.en;

  if (!data) return;
  const { pokemontypes, name, pokemonsprites, pokemonstats, pokemonabilities } =
    data.pokemon[0];

  const types = pokemontypes.map((type) => type.type.name);
  const colorType =
    types.length === 1 ? types : types.filter((type) => type !== "normal");
  const image =
    pokemonsprites[0].sprites.other["official-artwork"].front_default;

  const bgColor = getColorsByPokemonType(colorType[0]).backgroundColor;

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
        <OutlinedText text={formatId(id)} className={styles.pokemonId} />
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
              <h3>{dictionary.stats}</h3>
              {stats.map((item) =>
                Object.entries(item).map(([label, progress]) => (
                  <ProgressBar
                    key={label}
                    progress={progress}
                    label={dictionary[label as keyof typeof dictionary]}
                  />
                ))
              )}
            </div>

            <div>
              <h3>{dictionary.abilities}</h3>
              <span>{abilities.join(", ")}</span>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
