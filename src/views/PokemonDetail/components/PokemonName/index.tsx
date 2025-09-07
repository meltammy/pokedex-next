import OutlinedText from "@/components/OutlinedText";
import styles from "./PokemonName.module.scss";

type Props = {
  name: string;
};

export function PokemonName({ name }: Props) {
  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <OutlinedText text={name} className={styles.outlinedName} />
    </div>
  );
}
