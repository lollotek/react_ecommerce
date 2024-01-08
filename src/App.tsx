import { useState } from 'react'
import { Flex, Text, Button } from '@radix-ui/themes';
import { useGetProductsQuery } from './api/products';

function App() {
  const [page, setPage] = useState(0)
  const {data, isFetching} = useGetProductsQuery(page)

  return (
    <>
      <h1>dummy-commerce</h1>
      {isFetching && <p>Loading .. </p>}
      {!isFetching && data?.products?.map((product) => <p>{product.title}</p>)}

      <Flex direction="column" gap="2">
        <Text>current page: {page}</Text>
        <Button onClick={() => setPage((count) => count + 1)}>next</Button>
      </Flex>
    </>
  )
}

export default App