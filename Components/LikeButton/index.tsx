import { MouseEvent, useEffect, useState } from 'react'
import { HeartIcon } from '../Icons/Heart'
import { Button } from './styles'

type LikeButtonProps = {
  id: number
  onRemoveFromLikes?: (id: number) => void
}

export function LikeButton({ id, onRemoveFromLikes }: LikeButtonProps) {
  const likedPokemons =
    typeof window !== 'undefined' ? localStorage.getItem('likes') : null

  const [isLiked, setIsLiked] = useState(
    JSON.parse(likedPokemons || '[]').includes(id)
  )

  const [isClientSide, setIsClientSide] = useState(false)

  useEffect(() => {
    setIsLiked(JSON.parse(localStorage.getItem('likes') || '[]').includes(id))
    setIsClientSide(true)
  }, [])

  function toggleLike(e: MouseEvent) {
    e.stopPropagation()
    e.preventDefault()

    let likedPokemons = localStorage.getItem('likes')
    likedPokemons = likedPokemons ? likedPokemons : '[]'

    const likedPokemonsParsed: number[] = JSON.parse(likedPokemons)
    let newLikedPokemons: number[] = []

    if (isLiked) {
      newLikedPokemons = likedPokemonsParsed.filter(
        likedPokemonId => likedPokemonId !== id
      )
      onRemoveFromLikes && onRemoveFromLikes(id)
    } else {
      newLikedPokemons = [...likedPokemonsParsed, id]
    }

    setIsLiked(!isLiked)
    return localStorage.setItem('likes', JSON.stringify(newLikedPokemons))
  }

  if (!isClientSide) return <></>

  return (
    <Button isLiked={isLiked} onClick={toggleLike}>
      <HeartIcon fill="currentColor" stroke="transparent" size="24" />
    </Button>
  )
}
