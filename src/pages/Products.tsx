import { ListItems } from '@components/ListItems';
import { Pagination } from '@components/Pagination';
import { Section, Text } from '@radix-ui/themes';
import { useSearchParams } from 'react-router-dom';

function Products() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')

  return (
    <Section mt="0" size="1" mx={{ initial: '2', xs:'6'}}>
      <div className="mb-8">
        <Text as="p" className="text-xl font-bold tracking-tight text-gray-600 sm:text-2xl">
          {query ? `Results for ${query}: ` : 'All products'}
        </Text>
      </div>
      <ListItems />
      <Pagination />
    </Section>
  )
}

export default Products