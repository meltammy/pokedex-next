import { useState } from 'react'
import { HeartIcon } from '../Icons/Heart'
import { Button } from './styles'

type LikeButtonProps = {
  id: number
  onRemoveFromLikes?: (id: number) => void
}

export function LikeButton({ id, onRemoveFromLikes }: LikeButtonProps) {
  const likedPokemons = localStorage.getItem('likes')
  const [isLiked, setIsLiked] = useState(
    !!likedPokemons?.includes(id.toString())
  )

  function toggleLike() {
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

  return (
    <Button isLiked={isLiked} onClick={toggleLike}>
      <HeartIcon fill="currentColor" stroke="transparent" size="24" />
    </Button>
  )
}
