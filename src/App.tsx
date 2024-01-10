import { useState } from 'react'
import {ListItems} from './components/ListItems';
import { Pagination } from './components/Pagination';
import { Box, Container, Flex } from '@radix-ui/themes';

function App() {
  const [page, setPage] = useState(1)
 
  return (
    <>
      <h1>dummy-commerce</h1>
      <Container size="1">
        <Box>
          <Flex gap="2" direction="column" >
            <Pagination onChangePage={setPage} page={page} />
            <ListItems page={page} />
            <Pagination onChangePage={setPage} page={page} />
          </Flex>
        </Box>
      </Container>

    </>
  )
}

export default App