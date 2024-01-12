import { ListItems } from '@components/ListItems';
import { Pagination } from '@components/Pagination';
import { Box, Container, Flex, Section } from '@radix-ui/themes';

function Products() {
  return (
    <Section mx={{ initial: '2', xs:'6'}}>
      <Pagination />
      <ListItems />
      <Pagination />
    </Section>
  )
}

export default Products