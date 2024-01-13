import { Grid } from '@radix-ui/themes';
import { useGetProductsQuery } from '@api/products';
import { ListItem } from '@components/ListItem';
import { useParams } from 'react-router-dom';
import Error from '@pages/Error';
import { Skeleton } from '@components/ListItem/skeleton';
import { PAGINATION_SIZE } from '@api/const';

export const ListItems = (): JSX.Element => {
  const { pageParam } = useParams();
  const {data, isFetching, isError} = useGetProductsQuery(Number(pageParam || 1) -1)
  
  if (isError) return <Error number="" error="Fetch error"/>

  return (
    <Grid columns={{ initial: '1', xs:'2', md: '3', xl: '4' }} gap="4" >
      {isFetching ?
        Array(PAGINATION_SIZE).fill(null).map((_,index) => <Skeleton key={index}/>)
      : data?.products?.map((product) => 
        <ListItem key={product.id} {...product} />
      )}
    </Grid>
  )
}
