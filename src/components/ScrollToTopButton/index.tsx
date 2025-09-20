"use client";

import { ArrowUpIcon } from "../Icons/ArrowUp";
import styles from "./ScrollToTopButton.module.scss";

const showOnPx = 800;

export function ScrollToTopButton() {
  const id = "goToTop";

  function goToTop() {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  }

  if (typeof window !== "undefined") {
    document.addEventListener("scroll", () => {
      const buttonElement = document.getElementById(id);
      const scrollContainer = document.documentElement || document.body;

      if (!buttonElement) return;
      buttonElement.hidden = scrollContainer.scrollTop < showOnPx;
    });
  }

  return (
    <button id={id} onClick={goToTop} hidden className={styles.button}>
      <ArrowUpIcon />
    </button>
  );
}
