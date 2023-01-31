import { Routes } from '@/src/routes'
import Image from 'next/image'
import { ReactNode } from 'react'
import { Link } from '../Link'
import { Container } from './styles'

type Props = {
  text?: string
  action?: ReactNode
}

const defaultText = "<h1>We didn't find anything here<h1/>"
const defaultAction = <Link href={Routes.POKEMONS}>Go to pokemon list</Link>

export function NotFound({
  text = defaultText,
  action = defaultAction,
}: Props) {
  return (
    <Container>
      <div>
        <Image
          src="/pikachuBug.webp"
          layout="responsive"
          width={300}
          height={200}
          alt="Not found"
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: text }} />

      {action}
    </Container>
  )
}
