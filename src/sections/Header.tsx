import CartButton from '@components/CartButton/Cart';
import { Box, Flex, Section, Separator, Text } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Section mx={{ initial: '2', xs:'6'}} my={{ initial: '2', xs:'2'}}  pb="0" pt="0">
      <Flex justify="between" align="center">
        <Link to={'/'}>
          <Text as="p" className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Dummy Commerce</Text>
        </Link>
        <Box className="h-fit">
          <Flex gap="3" align="center">
            <Link to={'/'}>products</Link>
            <Separator orientation="vertical" />
            <CartButton />
          </Flex>
        </Box>
      </Flex>
    </Section>
    <Separator orientation="horizontal" size="4"/>
  </>
  )
}

export default Header