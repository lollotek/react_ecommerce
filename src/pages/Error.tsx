import { Box, Container, Heading } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <>
      <Link to={'/'}>
        <Box>
          <h1>dummy-commerce</h1>
        </Box>
      </Link>
      <Container size="1">
        <Heading as="h1" size="6">Oh no, something is not working..</Heading>
        <Link to={"/"}>Go back to homepage.</Link>
      </Container>
    </>
  )
}

export default Error