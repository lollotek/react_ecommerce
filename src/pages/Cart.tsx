import { Section, Separator, Text } from '@radix-ui/themes';
import { CartItems } from '@components/CartItems';
import CartRecap from '@sections/CartRecap';

function Cart() {
  return (
    <Section mt="0" size="1" mx={{ initial: '2', xs:'6'}}>
      <Text as="p" className="mt-4 text-xl font-bold tracking-tight text-gray-600 sm:text-2xl">Your Cart</Text>
      <CartRecap/>
      <Separator orientation="horizontal" size="4"/>
      <CartItems/>
    </Section>
  )
}

export default Cart