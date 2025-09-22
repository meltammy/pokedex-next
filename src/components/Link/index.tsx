import NextLink from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

import styles from "./Link.module.scss";

type Props = {
  href: string;
  isExternalHref?: boolean;
  children: ReactNode;
  variant?: "link-primary" | "outline-primary";
  locale?: string;
} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export function Link({
  children,
  isExternalHref = false,
  variant = "outline-primary",
  locale = "en",
  href,
  ...rest
}: Props) {
  const className = rest.className
    ? `${rest.className} ${styles.link}`
    : styles.link;

  const props = {
    ...rest,
    className,
    href: isExternalHref ? href : `/${locale}${href}`,
    "data-variant": variant,
  };

  if (!isExternalHref) return <NextLink {...props}>{children}</NextLink>;

  return <a {...props}>{children}</a>;
}
