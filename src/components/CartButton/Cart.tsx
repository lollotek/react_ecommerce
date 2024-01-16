import { LockClosedIcon } from '@radix-ui/react-icons';
import { Badge, Button, Text } from '@radix-ui/themes';
import { useCartProducts } from '@services/hooks/cart';
import { Link } from 'react-router-dom';

export const CartButton = () => {
  const {cartProductsCounter} = useCartProducts()
  return (
    <Button className="relative min-w-8 sm:min-w-32">
      <Link to={"/cart"} className="inline-flex w-full h-full items-center justify-center">
          {cartProductsCounter > 0 && 
            <Badge variant="solid" radius="full" color="orange" className="absolute -top-1 -left-2">
              {cartProductsCounter}
            </Badge>
          }
          <LockClosedIcon width="18" height="18" />          
          <Text className="hidden sm:inline-flex">Your Cart</Text>
      </Link>
    </Button>
  )
}
