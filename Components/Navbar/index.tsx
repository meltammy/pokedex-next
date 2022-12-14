import { Routes } from '@/src/routes'
import { useRouter } from 'next/router'
import { PokeballIcon } from '../Icons/Pokeball'
import { Link } from '../Link'
import { NavLink } from './NavLink'
import { StyledNavbar, Container } from './styles'

const navLinks = [
  {
    href: Routes.POKEMONS,
    children: 'Pokemons',
  },
  {
    href: Routes.FAVORITES,
    children: 'Favoritos',
  },
]

export function Navbar() {
  const { pathname } = useRouter()
  return (
    <StyledNavbar>
      <Container>
        <Link href={Routes.POKEMONS}>
          <PokeballIcon />
        </Link>
        <ul>
          {navLinks.map(item => (
            <NavLink
              active={item.href.includes(pathname)}
              key={item.href}
              {...item}
            />
          ))}
        </ul>
      </Container>
    </StyledNavbar>
  )
}
