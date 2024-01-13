import { Flex, Text, Strong, Box } from '@radix-ui/themes';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { Product } from '@api/types';
import './style.css'
import { AddToCartButton } from '@components/AddToCart/Index';

export const ListItem = ({ id, title, thumbnail, price, description }: Product): JSX.Element => {
  return (
    <Box className="shadow-blue-500/50 w-full overflow-hidden rounded-md shadow-[0_2px_5px] h-full">
      <Flex direction="column" className="h-full">
          <AspectRatio.Root ratio={16 / 9}>
            <img
              src={thumbnail}
              alt={description}
              className="h-full w-full object-cover"
            />
          </AspectRatio.Root>
        <Flex gap="4" direction="column" m={"4"} className="h-full"> 
          <div className='grow'>
            <p className="text-2xl md:text-lg uppercase">
              <Strong>{title}</Strong>
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between content-between md:items-center gap-y-4">
            <Text as="p" size="6" color='gray' trim='both'>€ {price}</Text>
              <AddToCartButton id={id} description={description}/>
          </div>
        </Flex>
      </Flex>
    </Box>
  )
}
