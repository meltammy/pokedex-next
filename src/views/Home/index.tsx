import { useEffect, useState } from 'react'
import { Link } from '@/Components'
import {
  ButtonDetail,
  Footer,
  Header,
  PokeButton,
  Container,
  MainContainer,
} from './styles'
import { GitHubIcon } from '@/Components/Icons/GitHub'
import { ExternalLinks, Routes } from '@/src/routes'
import { DevelopedBy } from '@/Components/DevelopedBy'
import { useAmplitude } from '@/lib/utils/amplitude/useAmplitude'
import { AmplitudeEventsName } from '@/lib/models/Amplitude'

export function HomeView() {
  const [open, setOpen] = useState(false)
  const { dispatchSimpleEvent } = useAmplitude()

  useEffect(() => {
    dispatchSimpleEvent(AmplitudeEventsName.loadedHome)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        <DevelopedBy />
      </MainContainer>
      <Footer open={open} />
    </Container>
  )
}
