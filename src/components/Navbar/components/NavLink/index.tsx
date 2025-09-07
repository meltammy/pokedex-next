import { ComponentProps } from "react";
import Link from "next/link";
import styles from "./NavLink.module.scss";

type NavLinkProps = ComponentProps<typeof Link> & {
  active: boolean;
};

export function NavLink({ children, active, ...props }: NavLinkProps) {
  const className = `${styles.linkContainer} ${active ? styles.active : ""}`;

  return (
    <li className={className}>
      <Link {...props}>{children}</Link>
    </li>
  );
}
