import { DevelopedBy } from '@/Components/DevelopedBy'
import { PikachuLoading } from '@/Components/PikachuLoading'
import { LoadingContainer } from './styles'

export function SplashScreen() {
  return (
    <LoadingContainer>
      <PikachuLoading />
      <DevelopedBy />
    </LoadingContainer>
  )
}
