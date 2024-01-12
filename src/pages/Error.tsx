import { Box, Button, Text } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

function Error({number = '404', error = 'Page not found', message = 'Sorry, we couldn’t find the page you’re looking for.'}) {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <Box className="text-center">
        <Text as="p" className="text-base font-semibold text-indigo-600">{number}</Text>
        <Text as="p" className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{error}</Text>
        <Text as="p" className="mt-6 text-base leading-7 text-gray-600">{message}</Text>
        <Box className="mt-10 flex items-center justify-center gap-x-6">
          <Link to={"/"}>
            <Button>
              Go back home
            </Button>
          </Link>
        </Box>
      </Box>
    </main>
  )
}

export default Error