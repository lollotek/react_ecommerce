import { Flex, Section } from '@radix-ui/themes';
import { CartItem } from '@components/CartItem';
import { useCartProducts } from '@services/hooks';

export const CartItems = ( ): JSX.Element => {
  const { cartProducts } = useCartProducts()

  return (
    <Section mt="0" size="1" mx={{ initial: '2', xs:'6'}} className='max-w-saASAS'>
      <Flex direction="column" gap="4" className="items-center">
        {cartProducts && cartProducts?.map(({productId, quantity}) => <CartItem key={productId} productId={productId} quantity={quantity} ></CartItem>)}
      </Flex>
    </Section>
  )
}
