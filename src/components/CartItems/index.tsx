import { Flex } from '@radix-ui/themes';
import { CartItem, CartProps } from '@components/CartItem';
import { useLocalStorage } from "@uidotdev/usehooks";
import { useMemo } from 'react';

export const CartItems = ( ): JSX.Element => {
  const [cart, _] = useLocalStorage<Array<number>>("cart", []);

  const charitems = useMemo(() => {
    if (!cart) return []
    const resultArray = cart.reduce((accumulator, currentId) => {
      const existingObject = accumulator.find(item => item.productId === currentId);
    
      if (existingObject) {
        existingObject.quantity++;
      } else {
        accumulator.push({ productId: currentId, quantity: 1 });
      }
    
      return accumulator;
    }, [] as Array<CartProps>)
    return resultArray;
}, [cart])

  return (
    <>
      <Flex direction="column" gap="9">
        {charitems && charitems?.map(({productId, quantity}) => <CartItem key={productId} productId={productId} quantity={quantity} ></CartItem>)}
      </Flex>
    </>
  )
}
