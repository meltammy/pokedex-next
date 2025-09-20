import Image from "next/image";
import styles from "./PikachuRunning.module.scss";
import { formatClassName } from "@/lib/utils/formatClassName";

type Props = {
  showBoxShadow?: boolean;
  className?: string;
};

export function PikachuRunning({ showBoxShadow = true, className }: Props) {
  return (
    <div
      className={formatClassName([
        showBoxShadow ? styles.container : styles.boxShadowContainer,
        className,
      ])}
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
