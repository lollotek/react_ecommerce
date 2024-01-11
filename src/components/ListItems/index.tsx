import { Flex } from '@radix-ui/themes';
import { useGetProductsQuery } from '@api/products';
import { ListItem } from '@components/ListItem';
import { useParams } from 'react-router-dom';

export const ListItems = (): JSX.Element => {
    const { pageParam } = useParams();
    const {data, isFetching, isError} = useGetProductsQuery(Number(pageParam || 1) -1)
    return (
    <>
      {isError && <p>Error reading data, try later</p>}
      {isFetching && <p>Loading.. </p>}
      <Flex direction="column" gap="9">
        {!isFetching && data?.products?.map((product) => <ListItem key={product.id} {...product} ></ListItem>)}
      </Flex>
    </>
  )
}
