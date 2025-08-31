import { ExternalLinks } from "@/routes";
import { HeartIcon } from "@/components/Icons/Heart";
import styles from "./DevelopedBy.module.scss";

export function DevelopedBy() {
  return (
    <h3 className={styles.container}>
      Developed with <HeartIcon /> by{" "}
      <a href={ExternalLinks.LINKEDIN}>Mel Tammy</a>
    </h3>
  );
}
