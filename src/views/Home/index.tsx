"use client";

import { useState } from "react";
import { GitHubIcon } from "@/components/Icons/GitHub";
import { ExternalLinks, Routes } from "@/routes";
import { DevelopedBy } from "@/components/DevelopedBy";

import styles from "./HomeView.module.scss";
import Image from "next/image";

export function HomeView() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div data-is-open={isOpen} className={styles.container}>
      <header data-is-open={isOpen} className={styles.header}>
        <button
          data-is-open={isOpen}
          className={styles.pokeButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={styles.buttonDetail}>
            <span>Click!</span>
          </div>
        </button>
      </header>

      <main data-is-open={isOpen} className={styles.mainContainer}>
        <h1>Hi, I’m Mel! </h1>
        <p>
          This is my personal project, a Pokédex where I organize Pokémon data
          while showcasing my skills in React, Next.js, and Sass.
        </p>
        <a href={Routes.POKEMONS}>Catch Them All!</a>
        <div>
          <h3>Check out the code:</h3>
          <a href={ExternalLinks.GITHUB_REPOSITORY}>
            <GitHubIcon />
            <span>GitHub</span>
          </a>
        </div>
        <DevelopedBy />
      </main>

      <footer data-is-open={isOpen} className={styles.footer} />
    </div>
  );
}
