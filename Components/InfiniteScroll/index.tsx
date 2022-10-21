import { ReactNode, useEffect, useRef, useState } from 'react'
import { useObserverInfiniteScroll } from './observerInfiniteScroll'

import { PikachuLoading } from '../PikachuLoading'

type InfiniteScrollProps = {
  children: ReactNode
  hasMore: boolean
  fetchMore: () => void
  loader?: ReactNode
  initialPage: number
}

const DefaultLoader = <PikachuLoading enableAnimation={false} />

export function InfiniteScroll({
  children,
  hasMore,
  loader = DefaultLoader,
  fetchMore,
  initialPage = 0,
}: InfiniteScrollProps) {
  const ref = useRef(null)
  const [page, setPage] = useState(initialPage)

  useObserverInfiniteScroll(ref, setPage)

  useEffect(() => {
    page > initialPage && fetchMore()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <>
      {children}
      {hasMore && <div ref={ref}>{loader}</div>}
    </>
  )
}
