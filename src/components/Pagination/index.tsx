import { Button, Container, IconButton, Text } from '@radix-ui/themes';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import { usePagination } from '@services/hooks/pagination';

export const Pagination = (): JSX.Element => {
  const {
    prevPage,
    nextPage,
    prevPages,
    nextPages,
    disableStart,
    disableEnd,
    showOne,
    showToOne,
    showMax,
    max,
    page,
    params,
    total,
    isFetching
  } = usePagination()

  if (isFetching) return (
    <Container my={{ initial: '2', xs:'6'}}>
      <div className="animate-pulse flex place-content-center w-full">
        <div className="bg-slate-500 h-8 w-64 rounded-md">
        </div>
      </div>
    </Container>
  );

  if (total === 0) {
    return <></>
  }
 
  return(
    <Container my={{ initial: '4', xs:'6'}}>
      <div className="flex gap-x-2 justify-center">

        <Link to={`/products/${prevPage}?${params}`}>
          <Button disabled={disableStart} variant="outline">
            <ArrowLeftIcon width="18" height="18" />
            <Text className="hidden sm:inline-flex">Previus</Text>
          </Button>
        </Link>

        {showOne &&
          <Link to={`/products/1?${params}`}>
            <IconButton variant="outline">
              1
            </IconButton>
          </Link>
        }
        {showToOne &&
          <IconButton disabled={true} variant="outline">
            ...
          </IconButton>
        }

        {prevPages.map(page =>
          <Link key={page} to={`/products/${page}?${params}`}>
            <IconButton variant="outline">
              <p>{page}</p>
            </IconButton> 
          </Link>
        )}

        <IconButton variant="soft">
            <p>{page}</p>
        </IconButton>

        {nextPages.map(page =>
          <Link key={page} to={`/products/${page}?${params}`}>
            <IconButton variant="outline">
              <p>{page}</p>
            </IconButton> 
          </Link>
        )}

        {(showMax) &&
          <>
            <IconButton disabled={true}>
              ...
            </IconButton>
            <IconButton disabled={true}>
              {max}
            </IconButton>
          </>
        }

        <Link to={`/products/${nextPage}?${params}`}>
          <Button disabled={disableEnd} variant="outline">
            <Text className="hidden sm:inline-flex">Next</Text> <ArrowRightIcon width="18" height="18" />
          </Button>
        </Link>
        
      </div>
      </Container>
  )
}