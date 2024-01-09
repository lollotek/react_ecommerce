import { Flex, Text, Button } from '@radix-ui/themes';
import { useLocalStorage } from "@uidotdev/usehooks";
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { Product } from '../../api/types';
import './style.css'

export const ListItem = ({ id, title, thumbnail, price, description }: Product): JSX.Element => {
  const [cart, saveCart] = useLocalStorage<Array<number>>("cart", []);
  return (
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
      <Button onClick={() => saveCart([...cart, id])}>add to cart</Button>
    </Flex>
  )
}
