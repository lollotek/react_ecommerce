import { ListItems } from '@components/ListItems';
import { Pagination } from '@components/Pagination';
import { Section, Text } from '@radix-ui/themes';

function Products() {
  return (
    <Section mt="0" size="1" mx={{ initial: '2', xs:'6'}}>
      <Text as="p" className="mt-4 text-xl font-bold tracking-tight text-gray-600 sm:text-2xl">All products</Text>
      <Pagination />
      <ListItems />
      <Pagination />
    </Section>
  )
}

export default Products