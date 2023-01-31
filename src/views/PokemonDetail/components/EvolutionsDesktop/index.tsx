import { Arrow } from '@/Components/Icons/Arrow'
import { FormattedPokemonEvolution } from '@/lib/models'
import { Routes } from '@/src/routes'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { EvolutionsContainerDesktop } from './styles'

type Props = {
  evolutionsData?: FormattedPokemonEvolution
}

export function EvolutionsDesktop({ evolutionsData }: Props) {
  return (
    <EvolutionsContainerDesktop>
      <h3>Evolutions</h3>
      {evolutionsData && (
        <section>
          {evolutionsData.evolutions.map(({ name, image }, index) => (
            <Fragment key={name}>
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
              {index !== evolutionsData.evolutions.length - 1 && (
                <Arrow key={`${name}-arrow`} />
              )}
            </Fragment>
          ))}
        </section>
      )}
    </EvolutionsContainerDesktop>
  )
}
