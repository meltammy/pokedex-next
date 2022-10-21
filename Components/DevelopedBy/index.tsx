import { ExternalLinks } from '@/src/routes'
import { HeartIcon } from '../Icons/HeartIcon'
import { Container } from './styles'

export function DevelopedBy() {
  return (
    <Container>
      Developed with <HeartIcon /> by{' '}
      <a href={ExternalLinks.LINKEDIN}>Mel Tammy</a>
    </Container>
  )
}
