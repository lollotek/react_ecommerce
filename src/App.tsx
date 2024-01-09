import { useState } from 'react'
import { Flex, Text, Button } from '@radix-ui/themes';
import {ListItems} from './components/ListItems';

function App() {
  const [page, setPage] = useState(0)
 

  return (
    <>
      <h1>dummy-commerce</h1>
      <ListItems page={page} />

      <Flex direction="column" gap="2">
        <Text>current page: {page}</Text>
        <Button onClick={() => setPage((count) => count + 1)}>next</Button>
      </Flex>
    </>
  )
}

export default App