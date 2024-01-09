import { Flex, Text, Button } from '@radix-ui/themes';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { Product } from '../../api/types';
import './style.css'

export const ListItem = ({ title, thumbnail, price, description }: Product): JSX.Element => (
    <>
      <Flex direction="column" gap="1">
        <div className="Container">
          <AspectRatio.Root ratio={16 / 9}>
            <img
                className="Image"
                src={thumbnail}
                alt={description}
            />
          </AspectRatio.Root>
        </div>
        <Text>{title}</Text>
        <Text>{price}</Text>
        <Button onClick={() => console.log('click')}>add to cart</Button>
      </Flex>
    </>
  )

