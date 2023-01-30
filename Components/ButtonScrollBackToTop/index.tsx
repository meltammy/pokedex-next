import { ArrowUpIcon } from '../Icons/ArrowUp'
import { Button } from './styles'

const showOnPx = 800

export function ButtonScrollBackToTop() {
  const id = 'goToTop'

  function goToTop() {
    document.body.scrollIntoView({
      behavior: 'smooth',
    })
  }

  if (typeof window !== 'undefined') {
    document.addEventListener('scroll', () => {
      const buttonElement = document.getElementById(id)
      const scrollContainer = document.documentElement || document.body

      if (!buttonElement) return
      buttonElement.hidden = scrollContainer.scrollTop < showOnPx
    })
  }

  return (
    <Button id={id} onClick={goToTop} hidden>
      <ArrowUpIcon />
    </Button>
  )
}
