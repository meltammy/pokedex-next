import Image from "next/image";
import styles from "./PikachuRunning.module.scss";

type Props = {
  enableAnimation?: boolean;
};

export function PikachuRunning({ enableAnimation = true }: Props) {
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
