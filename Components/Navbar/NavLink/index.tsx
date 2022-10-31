import { Link } from '@/Components/Link'
import { ComponentProps } from 'react'
import { LinkContainer } from './styles'

type NavLinkProps = ComponentProps<typeof Link> & {
  active: boolean
}

export function NavLink({ children, active, ...props }: NavLinkProps) {
  return (
    <LinkContainer active={active}>
      <Link {...props}>{children}</Link>
    </LinkContainer>
  )
}
