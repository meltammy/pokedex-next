"use client";

import { useState } from "react";
import { GitHubIcon } from "@/components/Icons/GitHub";
import { ExternalLinks, Routes } from "@/routes";
import { DevelopedBy } from "@/components/DevelopedBy";

import styles from "./HomeView.module.scss";

import { parseLocale } from "@/lib/utils/parseLocale";
import { Locale } from "@/types/locale";
import { homeDictionaries } from "@/locales/home";

interface HomeViewProps {
  locale?: string;
}

export function HomeView({ locale = "en" }: HomeViewProps) {
  const [isOpen, setIsOpen] = useState(false);

  const currentLocale: Locale = parseLocale(locale);
  const dictionary = homeDictionaries[currentLocale] || homeDictionaries.en;

  return (
    <div data-is-open={isOpen} className={styles.container}>
      <header data-is-open={isOpen} className={styles.header}>
        <button
          data-is-open={isOpen}
          className={styles.pokeButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="main-container"
          aria-label={isOpen ? dictionary.buttonClose : dictionary.buttonOpen}
        >
          <div className={styles.buttonDetail}>
            <span>{dictionary.button}</span>
          </div>
        </button>
      </header>

      <main
        id="main-container"
        data-is-open={isOpen}
        className={styles.mainContainer}
      >
        <h1>{dictionary.title}</h1>
        <p>{dictionary.description}</p>

        <a href={Routes.POKEMONS} aria-label={dictionary.linkCatchLabel}>
          {dictionary.linkCatch}
        </a>

        <section aria-labelledby="check-code">
          <h3 id="check-code">{dictionary.checkCode}</h3>
          <a
            href={ExternalLinks.GITHUB_REPOSITORY}
            aria-label={dictionary.githubAriaLabel}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon role="img" aria-hidden="true" />
            <span>{dictionary.github}</span>
          </a>
        </section>

        <DevelopedBy locale={currentLocale} />
      </main>

      <footer data-is-open={isOpen} className={styles.footer} />
    </div>
  );
}
