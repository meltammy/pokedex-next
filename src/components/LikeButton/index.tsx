"use client";

import { useState } from "react";
import { HeartIcon } from "../Icons/Heart";
import styles from "./LikeButton.module.scss";

export function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      className={styles.button}
      onClick={() => setIsLiked(!isLiked)}
      data-is-liked={isLiked}
    >
      <HeartIcon
        fill="currentColor"
        stroke="transparent"
        width="24"
        height="24"
      />
    </button>
  );
}
