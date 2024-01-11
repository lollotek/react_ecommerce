import { ListItems } from '@components/ListItems';
import { Pagination } from '@components/Pagination';
import { Box, Container, Flex } from '@radix-ui/themes';

function Products() {
  return (
    <>
      <Container size="1">
        <Box>
          <Flex gap="2" direction="column" >
            <Pagination />
            <ListItems />
            <Pagination />
          </Flex>
        </Box>
      </Container>

    </>
  )
}

export default Products