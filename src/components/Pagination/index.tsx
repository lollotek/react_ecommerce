import { useMemo } from 'react';
import { Flex, IconButton } from '@radix-ui/themes';
import { DoubleArrowLeftIcon, ArrowLeftIcon, DoubleArrowRightIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { useGetProductsQuery } from '@api/products';
import { PAGINATION_SIZE } from '@api/const';
import { Link, useParams } from 'react-router-dom';

export const Pagination = (): JSX.Element => {
  const { pageParam } = useParams();
  const page = Number(pageParam || 1)
  const {data, isFetching} = useGetProductsQuery(page-1)

  const max = useMemo(() => {
    if (!data) return 0
    return Math.ceil(data.total / PAGINATION_SIZE)
  }, [data]);

  const {disableStart, disableEnd, prevPages, nextPages} = useMemo(() => {
    const MAX_STEPS = 2
    const availableNext = Math.min(MAX_STEPS, max - page);
    const availablePrev = Math.min(MAX_STEPS, page-1);
    return {
      prevPages: Array.from({ length: availablePrev }, (_, index) => page - 1 - index).reverse(),
      nextPages: Array.from({ length: availableNext }, (_, index) => page + 1 +  index),
      disableEnd: page === max,
      disableStart: page === 1 ,
    }
  }, [page, max]);

  if (isFetching) return (<></>);
 
  return(
    <Flex gap="2">
      <Link to={`/products/${1}`}>
        <IconButton disabled={disableStart}>
          <DoubleArrowLeftIcon width="18" height="18" />
        </IconButton>
      </Link>
      <Link to={`/products/${page-1}`}>
        <IconButton disabled={disableStart}>
          <ArrowLeftIcon width="18" height="18" />
        </IconButton>
      </Link>
      {prevPages.map(prevPage =>
        <Link to={`/products/${prevPage}`}>
          <IconButton key={prevPage}>
            <p>{prevPage}</p>
          </IconButton> 
        </Link>
      )}

      <IconButton variant="outline">
          <p>{page}</p>
      </IconButton>

      {nextPages.map(nextPage =>
        <Link to={`/products/${nextPage}`}>
          <IconButton key={nextPage}>
            <p>{nextPage}</p>
          </IconButton> 
        </Link>
      )}
      <Link to={`/products/${page+1}`}>
        <IconButton disabled={disableEnd}>
          <ArrowRightIcon width="18" height="18" />
        </IconButton>
      </Link>
      <Link to={`/products/${max}`}>
        <IconButton disabled={disableEnd}>
          <DoubleArrowRightIcon width="18" height="18" />
        </IconButton>
      </Link>
    </Flex>
  )
}