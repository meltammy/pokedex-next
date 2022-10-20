import { useState } from 'react'
import { Link } from '@/Components'
import {
  ButtonDetail,
  Footer,
  Header,
  PokeButton,
  Container,
  MainContainer,
} from './styles'
import { GitHubIcon } from '@/Components/Icons/GitHubIcon'
import { HeartIcon } from '@/Components/Icons/HeartIcon'
import { ExternalLinks, Routes } from '@/src/routes'

export function HomeView() {
  const [open, setOpen] = useState(false)

  return (
    <Container open={open}>
      <Header open={open}>
        <PokeButton open={open} onClick={() => setOpen(!open)}>
          <ButtonDetail>
            <span>Click!</span>
          </ButtonDetail>
        </PokeButton>
      </Header>
      <MainContainer open={open}>
        <h1>Hello! Welcome to my pokedex</h1>
        <div>
          <h3>You can check the code here: </h3>
          <a href={ExternalLinks.GITHUB_REPOSITORY}>
            <GitHubIcon />
            <span>GitHub</span>
          </a>
        </div>
        <Link href={Routes.POKEMONS_LIST}>Let&apos;s go to pokedex!</Link>
        <h3>
          Developed with <HeartIcon /> by{' '}
          <a href={ExternalLinks.LINKEDIN}>Mel Tammy</a>
        </h3>
      </MainContainer>
      <Footer open={open} />
    </Container>
  )
}
