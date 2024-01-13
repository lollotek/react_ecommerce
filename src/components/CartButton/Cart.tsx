import { LockClosedIcon } from '@radix-ui/react-icons';
import { Badge, Button } from '@radix-ui/themes';
import { useCartProducts } from '@services/hooks';
import { Link } from 'react-router-dom';

export const CartButton = () => {
  const {cartProducts} = useCartProducts()
  return (
    <Link to={"/cart"}>
      <Button className="relative min-w-32">
        {cartProducts?.length > 0 && 
          <Badge variant="solid" radius="full" color="orange" className="absolute -top-1 -left-2">
            {cartProducts.length}
          </Badge>
        }
        <LockClosedIcon width="18" height="18" />          
        Your Cart
      </Button>
    </Link>
  )
}
