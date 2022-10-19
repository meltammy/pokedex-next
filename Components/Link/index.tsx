import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { ReactNode } from 'react'

type LinkProps = {
  openInNewTab?: boolean
  children: ReactNode
} & NextLinkProps

export function Link({ openInNewTab, children, ...props }: LinkProps) {
  return (
    <NextLink target={openInNewTab ? '_blank' : undefined} {...props} passHref>
      <a>{children}</a>
    </NextLink>
  )
}
