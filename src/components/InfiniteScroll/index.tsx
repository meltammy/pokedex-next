import { ReactNode, useEffect, useRef, useState } from "react";

import { PikachuRunning } from "../PikachuRunning";
import { observerInfiniteScroll } from "./observerInfiniteScroll";
import { ScrollToTopButton } from "../ScrollToTopButton";

type InfiniteScrollProps = {
  children: ReactNode;
  hasMore: boolean;
  fetchMore: () => void;
  loader?: ReactNode;
  initialPage: number;
  hidden?: boolean;
  loaderClassName?: string;
};

const DefaultLoader = <PikachuRunning enableAnimation={false} />;

export function InfiniteScroll({
  children,
  hasMore,
  loader = DefaultLoader,
  fetchMore,
  initialPage = 0,
  hidden = false,
  loaderClassName,
}: InfiniteScrollProps) {
  const ref = useRef(null);
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    page > initialPage && fetchMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    observerInfiniteScroll(ref, setPage);
  }, [children]);

  if (hidden) return null;

  return (
    <>
      {children}
      {hasMore && (
        <div ref={ref} className={loaderClassName}>
          {loader}
        </div>
      )}
      <ScrollToTopButton />
    </>
  );
}
