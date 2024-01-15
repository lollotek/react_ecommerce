import { useMemo } from 'react';
import { Button, Container, IconButton } from '@radix-ui/themes';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { useGetProductsQuery } from '@api/products';
import { PAGINATION_SIZE } from '@api/const';
import { Link, useParams } from 'react-router-dom';

const MAX_STEPS = 2

export const Pagination = (): JSX.Element => {
  const { pageParam } = useParams();
  const page = Number(pageParam || 1)
  const {data, isFetching} = useGetProductsQuery(page-1)

  const max = useMemo(() => {
    if (!data) return 0
    return Math.ceil(data.total / PAGINATION_SIZE)
  }, [data]);

  const {disableStart, disableEnd, prevPages, nextPages} = useMemo(() => {
    const availableNext = Math.min(MAX_STEPS, max - page);
    const availablePrev = Math.min(MAX_STEPS, page-1);
    return {
      prevPages: Array.from({ length: availablePrev }, (_, index) => page - 1 - index).reverse(),
      nextPages: Array.from({ length: availableNext }, (_, index) => page + 1 +  index),
      disableEnd: page === max,
      disableStart: page === 1 ,
    }
  }, [page, max]);

  if (isFetching) return (
    <Container my={{ initial: '2', xs:'6'}}>
      <div className="animate-pulse flex place-content-center w-full">
        <div className="bg-slate-500 h-8 w-64 rounded-md">
        </div>
      </div>
    </Container>
  );
 
  return(
    <Container my={{ initial: '2', xs:'6'}}>
      <div className="flex gap-x-2 justify-center">

        <Link to={`/products/${page-1}`}>
          <Button disabled={disableStart} variant="outline">
            <ArrowLeftIcon width="18" height="18" />
            Previus
          </Button>
        </Link>

        {(page - MAX_STEPS > 1) &&
          <Link to={`/products/1`}>
            <IconButton variant="outline">
              1
            </IconButton>
          </Link>
        }
        {(page - MAX_STEPS > 2) &&
          <IconButton disabled={true} variant="outline">
            ...
          </IconButton>
        }

        {prevPages.map(prevPage =>
          <Link key={prevPage} to={`/products/${prevPage}`}>
            <IconButton variant="outline">
              <p>{prevPage}</p>
            </IconButton> 
          </Link>
        )}

        <IconButton variant="soft">
            <p>{page}</p>
        </IconButton>

        {nextPages.map(nextPage =>
          <Link key={nextPage} to={`/products/${nextPage}`}>
            <IconButton variant="outline">
              <p>{nextPage}</p>
            </IconButton> 
          </Link>
        )}

        {(page + MAX_STEPS < max) &&
          <>
            <IconButton disabled={true}>
              ...
            </IconButton>
            <IconButton disabled={true}>
              {max}
            </IconButton>
          </>
        }

        <Link to={`/products/${page+1}`}>
          <Button disabled={disableEnd} variant="outline">
            Next <ArrowRightIcon width="18" height="18" />
          </Button>
        </Link>
        {/* <Link to={`/products/${max}`}>
          <IconButton disabled={disableEnd}>
            <DoubleArrowRightIcon width="18" height="18" />
          </IconButton>
        </Link> */}
      </div>
      </Container>
  )
}