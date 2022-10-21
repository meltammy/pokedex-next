import { useEffect } from 'react'

type ObserverInfiniteScroll = (
  ref: React.MutableRefObject<null>,
  setPage: React.Dispatch<React.SetStateAction<number>>
) => void

const options = {
  root: null,
  rootMargin: '10px',
  threshold: 0.5,
}

export const useObserverInfiniteScroll: ObserverInfiniteScroll = (
  ref,
  setPage
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(entities => {
      const target = entities[0]
      if (target.isIntersecting) {
        setPage(prevPage => prevPage + 1)
      }
    }, options)

    const refCurrent = ref.current

    if (refCurrent) {
      observer.observe(refCurrent)
    }

    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
