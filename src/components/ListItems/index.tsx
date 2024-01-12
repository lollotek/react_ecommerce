import { Box, Grid, Text } from '@radix-ui/themes';
import { useGetProductsQuery } from '@api/products';
import { ListItem } from '@components/ListItem';
import { useParams } from 'react-router-dom';
import Error from '@pages/Error';

export const ListItems = (): JSX.Element => {
    const { pageParam } = useParams();
    const {data, isFetching, isError} = useGetProductsQuery(Number(pageParam || 1) -1)
    
    if (isError) return <Error number="" error="Fetch error"/>
    
    if (isFetching) {
      return(
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <Box className="text-center">
            <Text as="p" className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Loading ...</Text>
          </Box>
        </main>
      )
    }

  return (
    <Grid columns={{ initial: '1', xs:'2', md: '3', xl: '4' }} gap="4" >
      {!isFetching && data?.products?.map((product) => <ListItem key={product.id} {...product} ></ListItem>)}
    </Grid>
  )
}
