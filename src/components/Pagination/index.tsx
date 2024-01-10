import { useMemo } from 'react';
import { Flex, IconButton } from '@radix-ui/themes';
import { DoubleArrowLeftIcon, ArrowLeftIcon, DoubleArrowRightIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { PAGINATION_SIZE } from '../../api/const';
import { useGetProductsQuery } from '../../api/products';

type Props = {
  onChangePage: ((page:number) => void)
  page: number,
}

export const Pagination = ({ onChangePage, page }: Props): JSX.Element => {
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
      <IconButton disabled={disableStart} onClick={() => onChangePage(1)}>
        <DoubleArrowLeftIcon width="18" height="18" />
      </IconButton>
      <IconButton disabled={disableStart} onClick={() => onChangePage(page-1)}>
        <ArrowLeftIcon width="18" height="18" />
      </IconButton>

      {prevPages.map(prevPage =>
        <IconButton key={prevPage} onClick={() => onChangePage(prevPage)}>
          <p>{prevPage}</p>
        </IconButton> 
      )}

      <IconButton variant="outline">
          <p>{page}</p>
      </IconButton>

      {nextPages.map(nextPage =>
        <IconButton key={nextPage} onClick={() => onChangePage(nextPage)}>
          <p>{nextPage}</p>
        </IconButton> 
      )}
      
      <IconButton disabled={disableEnd} onClick={() => onChangePage(page+1)}>
        <ArrowRightIcon width="18" height="18" />
      </IconButton>
      <IconButton disabled={disableEnd} onClick={() => onChangePage(max)}>
        <DoubleArrowRightIcon width="18" height="18" />
      </IconButton>
    </Flex>
  )
}