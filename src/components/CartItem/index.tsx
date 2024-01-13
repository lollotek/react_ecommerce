import { Flex, Text, Button } from '@radix-ui/themes';
import { useGetProductQuery } from '@api/products';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import './style.css'
import { useCartProducts } from '@services/hooks';

export type CartProps = {
  productId: number,
  quantity: number
}

export const CartItem = ({ productId, quantity }: CartProps): JSX.Element => {
  const { removeCartProduct } = useCartProducts()
  const {data, isFetching} = useGetProductQuery(productId)

  const removeItemFromCart = () => {
    removeCartProduct(productId)
  }

  if (isFetching || !data) return (<></>)
  const { title, thumbnail, price, description } = data
  return (
    <Flex gap="2" direction="column" >
      <Flex gap="1">
        <div className="Container">
          <AspectRatio.Root ratio={16 / 9}>
            <img
                className="Image"
                src={thumbnail}
                alt={description}
            />
          </AspectRatio.Root>
        </div>
        <Flex gap="2" direction="column" >
          <Text>{title}</Text>
          <Text>{price}</Text>
          <Text>qnt: {quantity}</Text>
        </Flex>
      </Flex>
      <Button onClick={removeItemFromCart}>remove cart</Button>
    </Flex>
  )
}
