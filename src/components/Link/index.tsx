import NextLink from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

import styles from "./Link.module.scss";

type Props = {
  href: string;
  isExternalHref?: boolean;
  children: ReactNode;
  variant?: "link-primary" | "outline-primary";
} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export function Link({
  children,
  isExternalHref = false,
  variant = "outline-primary",
  ...rest
}: Props) {
  const className = rest.className
    ? `${rest.className} ${styles.link}`
    : styles.link;

  const props = {
    ...rest,
    className,
    "data-variant": variant,
  };

  if (!isExternalHref) return <NextLink {...props}>{children}</NextLink>;

  return <a {...props}>{children}</a>;
}
