import { ReactNode } from "react";
import { formatClassName } from "@/lib/utils/formatClassName";

import styles from "./Container.module.scss";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: Props) {
  return (
    <div className={formatClassName([styles.container, className])}>
      {children}
    </div>
  );
}
