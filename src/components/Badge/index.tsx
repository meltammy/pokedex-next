import styles from "./Badge.module.scss";

type BadgeProps = {
  text: string;
  colors?: { backgroundColor: string; color: string };
};

export function Badge({ text, colors }: BadgeProps) {
  return (
    <span
      className={styles.badge}
      style={
        colors && {
          backgroundColor: colors.backgroundColor,
          color: colors.color,
        }
      }
    >
      {text}
    </span>
  );
}
