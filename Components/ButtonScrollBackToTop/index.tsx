import { ArrowUpIcon } from '../Icons/ArrowUp'
import { Button } from './styles'

const showOnPx = 800

export function ButtonScrollBackToTop() {
  const id = 'goToTop'
  const scrollContainer = document.documentElement || document.body

  function goToTop() {
    document.body.scrollIntoView({
      behavior: 'smooth',
    })
  }

  document.addEventListener('scroll', () => {
    const buttonElement = document.getElementById(id)
    if (!buttonElement) return
    buttonElement.hidden = scrollContainer.scrollTop < showOnPx
  })

  return (
    <Button id={id} onClick={goToTop} hidden>
      <ArrowUpIcon />
    </Button>
  )
}
