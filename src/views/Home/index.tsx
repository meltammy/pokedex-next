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
          <h3>You can check the code on this repository: </h3>
          <a href="https://github.com/meltammy/pokedex-next">
            <GitHubIcon />
            <span>GitHub</span>
          </a>
        </div>
        <Link href="#">Let&apos;s go to pokedex!</Link>
        <h3>
          Developed with <HeartIcon /> by{' '}
          <a href="https://www.linkedin.com/in/meltammy/">Mel Tammy</a>
        </h3>
      </MainContainer>
      <Footer open={open}></Footer>
    </Container>
  )
}
