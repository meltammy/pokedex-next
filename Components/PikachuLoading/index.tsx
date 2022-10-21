import Image from 'next/image'
import { AnimationContainer, StaticContainer } from './styles'

export function PikachuLoading({
  enableAnimation = true,
}: {
  enableAnimation?: boolean
}) {
  const pikachu = (
    <Image
      src="https://media.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif"
      alt=""
      layout="fixed"
      width={'60px'}
      height={'50px'}
    />
  )
  if (enableAnimation) return <AnimationContainer>{pikachu}</AnimationContainer>

  return <StaticContainer>{pikachu}</StaticContainer>
}
