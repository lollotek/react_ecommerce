import { Container } from '@radix-ui/themes';
import { CartItems } from '@components/CartItems';

function Cart() {
  return (
    <>
      <Container size="1">
        <p>carrello:</p>
        <CartItems/>
      </Container>
    </>
  )
}

export default Cart