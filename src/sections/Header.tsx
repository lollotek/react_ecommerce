import { CartButton } from '@components/CartButton/Cart';
import { IconJarLogoIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Box, Flex, Section, Separator, Text, TextField } from '@radix-ui/themes';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const submitSearch: React.ComponentProps<"input">["onKeyDown"] = (e) => {
    if (e.key === 'Enter'){
      navigate(`/products?q=${(e.target as HTMLInputElement).value}`)
    }
  };

  return (
    <>
      <Section mx={{ initial: '2', xs:'6'}} my={{ initial: '2', xs:'2'}}  pb="0" pt="0">
        <Flex justify="between" align="center" gap="4">
          <Link to={'/'}>
            <Flex align="baseline" gap="4">
              <IconJarLogoIcon width="28" height="28"/>
              <Text as="p" className="mt-4 hidden font-bold tracking-tight text-gray-900 sm:text-xl md:text-3xl sm:inline-flex">MyShop</Text>
            </Flex>
          </Link>
          <TextField.Root>
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
            <TextField.Input placeholder="Search products…" size="3" onKeyDown={submitSearch}/>
          </TextField.Root>
          <Box className="h-fit">
            <Flex gap="3" align="center">
              <Link className="hidden md:inline-flex" to={'/'}>products</Link>
              <Separator orientation="vertical" className="hidden md:inline-flex"/>
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