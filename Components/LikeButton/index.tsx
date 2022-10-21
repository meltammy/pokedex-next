import { useState } from 'react'
import { HeartIcon } from '../Icons/HeartIcon'
import { Button } from './styles'

type LikeButtonProps = {
  id: number
}

export function LikeButton({ id }: LikeButtonProps) {
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
    } else {
      newLikedPokemons = [...likedPokemonsParsed, id]
    }

    setIsLiked(!isLiked)
    return localStorage.setItem('likes', JSON.stringify(newLikedPokemons))
  }

  return (
    <Button isLiked={isLiked} onClick={toggleLike}>
      <HeartIcon fill="currentColor" size="24" />
    </Button>
  )
}
