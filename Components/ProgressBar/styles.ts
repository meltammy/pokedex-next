import styled from 'styled-components'

type Props = {
  progress: number
}

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas: 'label value progress';
  grid-template-columns: 5rem 1.5rem auto;
  column-gap: 1rem;
  align-items: center;
  margin-bottom: 0.5rem;
  > b {
    text-transform: capitalize;
  }
`
export const ProgressContainer = styled.div<Props>`
  width: 100%;
  background-color: #80808045;
  border-radius: 1rem;
  box-shadow: inset 0px 0px 2px #00000052;
  height: 0.5rem;

  > div {
    background-color: ${({ progress }) => getColor(progress)};
    width: ${({ progress }) => progress + '%'};
    height: 0.5rem;
    border-radius: 1rem;
    box-shadow: inset 0px 0px 2px #0000007a;
  }
`

function getColor(progress: number) {
  if (progress === 100) return '#00b700'
  if (progress <= 20) return 'red'
  if (progress < 40) return 'orange'
  if (progress < 60) return '#fff200'
  if (progress > 60) return 'yellowGreen'
}
