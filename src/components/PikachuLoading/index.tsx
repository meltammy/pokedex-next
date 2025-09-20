import Image from "next/image";
import styles from "./PikachuLoading.module.scss";

type Props = {
  enableAnimation?: boolean;
};

export function PikachuLoading({ enableAnimation = true }: Props) {
  return (
    <div
      className={
        enableAnimation ? styles.animationContainer : styles.staticContainer
      }
    >
      <Image
        src="https://media.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif"
        alt="Pikachu running"
        width={60}
        height={50}
      />
    </div>
  );
}
