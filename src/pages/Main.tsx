import { Box, Flex, Separator } from '@radix-ui/themes';
import { Link, Outlet } from 'react-router-dom';

function Main() {
  return (
    <Flex direction="column">
      <Flex justify="between" height="9">
        <Link to={'/'}>
          <Box>
              <h1>dummy-commerce</h1>
          </Box>
        </Link>
        <Box height="9">
          <Flex gap="3" align="center">
            <Link to={'/'}>products</Link>
          <Separator orientation="vertical" />
            <Link to={'/cart'}>cart</Link>
          </Flex>
        </Box>
      </Flex>
      <Box>
        <Outlet />
      </Box>
    </Flex>
  )
}

export default Main