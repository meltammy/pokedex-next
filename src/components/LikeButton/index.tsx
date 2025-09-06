import { useState } from "react";
import { HeartIcon } from "../Icons/Heart";
import styles from "./LikeButton.module.scss";

export function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  const getColor = () => {
    if (window.innerWidth <= 515) {
      return isLiked ? "hotpink" : "white";
    } else if (window.innerWidth <= 768) {
      return isLiked ? "hotpink" : "darkgrey";
    }
    return isLiked ? "hotpink" : "darkgrey";
  };

  return (
    <button
      className={styles.button}
      onClick={() => setIsLiked(!isLiked)}
      style={{ color: getColor() }}
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
