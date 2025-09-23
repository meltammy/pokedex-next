"use client";

import { Container } from "@/components/Container";
import { Link } from "@/components/Link";
import { parseLocale } from "@/lib/utils/parseLocale";
import { creditsDictionaries } from "@/locales/credits";
import { ExternalLinks, Routes } from "@/routes";
import { Locale } from "@/types/locale";

import styles from "./CreditsView.module.scss";

interface HomeViewProps {
  locale?: string;
}
export function CreditsView({ locale = "en" }: HomeViewProps) {
  const currentLocale: Locale = parseLocale(locale);
  const dictionary =
    creditsDictionaries[currentLocale] || creditsDictionaries.en;

  return (
    <main className={styles.mainContainer}>
      <Container className={styles.container}>
        <h1>{dictionary.title}</h1>

        <section>
          <h2>{dictionary.dataSourcesTitle}</h2>
          <p>
            {dictionary.dataSourcesText}{" "}
            <a href="https://pokeapi.co/" target="_blank">
              PokéAPI
            </a>
            .
          </p>
        </section>

        <section>
          <h2>{dictionary.imagesTitle}</h2>
          <p>
            {dictionary.imagesText}{" "}
            <a href="https://tenor.com/" target="_blank">
              Tenor
            </a>{" "}
            (ex.:{" "}
            <a
              href="https://media.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif"
              target="_blank"
            >
              Pikachu Running
            </a>
            ).
          </p>
        </section>

        <section>
          <h2>{dictionary.legalTitle}</h2>
          <p>{dictionary.legalText}</p>
        </section>

        <section>
          <h2>{dictionary.thanksTitle}</h2>
          <p>{dictionary.thanksText}</p>
        </section>

        <section>
          <h2>{dictionary.devTitle}</h2>
          <p>
            {dictionary.devText}{" "}
            <a href={ExternalLinks.GITHUB_REPOSITORY} target="_blank">
              GitHub
            </a>
            .
          </p>
        </section>

        <section>
          <h2>{dictionary.techTitle}</h2>
          <ul>
            {dictionary.techList.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        </section>
      </Container>
    </main>
  );
}
