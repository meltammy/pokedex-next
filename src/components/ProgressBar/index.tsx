import styles from "./ProgressBar.module.scss";

type ProgressBarProps = {
  progress: number;
  label: string;
};

export function ProgressBar({ progress, label }: ProgressBarProps) {
  const formattedProgress = progress <= 100 ? progress : 100;

  function getColor(progress: number) {
    if (progress === 100) return "#00b700";
    if (progress <= 20) return "red";
    if (progress < 40) return "orange";
    if (progress < 60) return "#fff200";
    if (progress >= 60) return "yellowGreen";
  }

  return (
    <div className={styles.container}>
      <b>{label}</b>
      <span>{formattedProgress}</span>
      <div className={styles.progressContainer}>
        <div
          style={{
            width: `${formattedProgress}%`,
            backgroundColor: getColor(formattedProgress),
          }}
        />
      </div>
    </div>
  );
}
