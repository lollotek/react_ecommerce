import { Flex } from '@radix-ui/themes';
import { useGetProductsQuery } from '../../api/products';
import { ListItem } from '../ListItem';

type Props = {
  page: number,
}

export const ListItems = ( { page }: Props ): JSX.Element => {
    const {data, isFetching} = useGetProductsQuery(page)
    return (
    <>
      <Flex direction="column" gap="9">
        {!isFetching && data?.products?.map((product) => <ListItem {...product} ></ListItem>)}
      </Flex>
    </>
  )
}
