import { ReactNode, useEffect, useRef, useState } from 'react'

import { PikachuLoading } from '../PikachuLoading'
import { ButtonScrollBackToTop } from '../ButtonScrollBackToTop'
import { observerInfiniteScroll } from './observerInfiniteScroll'

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

  useEffect(() => {
    page > initialPage && fetchMore()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  useEffect(() => {
    observerInfiniteScroll(ref, setPage)
  }, [children])

  return (
    <>
      {children}
      {hasMore && <div ref={ref}>{loader}</div>}
      <ButtonScrollBackToTop />
    </>
  )
}
