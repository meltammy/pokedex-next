import { Container, ProgressContainer } from './styles'

type ProgressBarProps = {
  progress: number
  label: string
}

export function ProgressBar({ progress, label }: ProgressBarProps) {
  const formattedProgress = progress <= 100 ? progress : 100
  return (
    <Container>
      <b>{label}</b>
      <span>{formattedProgress}</span>
      <ProgressContainer progress={formattedProgress}>
        <div />
      </ProgressContainer>
    </Container>
  )
}
