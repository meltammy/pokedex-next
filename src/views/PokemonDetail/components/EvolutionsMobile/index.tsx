import { Arrow } from '@/Components/Icons/Arrow'
import { FormattedPokemonEvolution } from '@/lib/models'
import { Routes } from '@/src/routes'

import Image from 'next/image'
import Link from 'next/link'

import { EvolutionsContainerMobile } from './styles'

type Props = {
  evolutionsData?: FormattedPokemonEvolution
}

export function EvolutionsMobile({ evolutionsData }: Props) {
  if (!evolutionsData) return null

  return (
    <EvolutionsContainerMobile>
      <h3>Evolutions</h3>
      {evolutionsData.evolutions.map(({ name, image }, index) => (
        <div key={name}>
          <div>
            <Image
              layout="responsive"
              width={300}
              height={300}
              alt={name}
              src={image}
            />
            <Link href={Routes.POKEMON_DETAIL + name}>{name}</Link>
          </div>
          {index !== evolutionsData.evolutions.length - 1 && <Arrow />}
        </div>
      ))}
    </EvolutionsContainerMobile>
  )
}
