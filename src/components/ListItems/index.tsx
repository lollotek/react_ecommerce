import { Flex } from '@radix-ui/themes';
import { useGetProductsQuery } from '../../api/products';
import { ListItem } from '../ListItem';

type Props = {
  page: number,
}

export const ListItems = ( { page }: Props ): JSX.Element => {
    const {data, isFetching, isError} = useGetProductsQuery(page-1)
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
