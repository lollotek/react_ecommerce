import { Flex } from '@radix-ui/themes';
import { CartItem } from '@components/CartItem';
import { useCartProducts } from '@services/hooks';

export const CartItems = ( ): JSX.Element => {
  const { cartProducts } = useCartProducts()

  return (
    <>
      <Flex direction="column" gap="9">
        {cartProducts && cartProducts?.map(({productId, quantity}) => <CartItem key={productId} productId={productId} quantity={quantity} ></CartItem>)}
      </Flex>
    </>
  )
}
