type ObserverInfiniteScroll = (
  ref: React.MutableRefObject<null>,
  setPage: React.Dispatch<React.SetStateAction<number>>
) => void

const options = {
  root: null,
  rootMargin: '10px',
  threshold: 0.5,
}

/**
 * @description Cria um "observador" que dispara uma função
 * toda vez que o elemento correspondente à ref aparece na tela.
 */
export const observerInfiniteScroll: ObserverInfiniteScroll = (
  ref,
  setPage
) => {
  const observer = new IntersectionObserver(entities => {
    const target = entities[0]

    if (target.isIntersecting) {
      setPage(e => e + 1)
    }
  }, options)

  if (ref.current) {
    observer.observe(ref.current)
  }
}
