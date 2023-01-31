import OutlinedText from '@/Components/OutlinedText'
import styled from 'styled-components'

export const Container = styled.div`
  > h1 {
    grid-area: name;
    text-transform: capitalize;
    font-weight: 600;
    height: fit-content;
    margin: 0;
    margin-left: 1rem;
    color: white;
    text-shadow: 0px 0px 20px #00000066;
  }

  @media (min-width: 1080px) {
    > h1 {
      display: none;
    }
  }
`

export const OutlinedName = styled(OutlinedText)`
  opacity: 0;

  @media (min-width: 1080px) {
    opacity: 1;
    grid-area: name;
    width: 55rem;
    margin-left: -24rem;
    text-transform: uppercase;
    height: 8rem;
  }
`
