import { LockClosedIcon } from '@radix-ui/react-icons';
import { Badge, Button } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

function CartButton() {
  return (
    <Link to={"/cart"}>
      <Button className="relative min-w-32">
        <Badge variant="solid" radius="full" color="orange" className="absolute -top-1 -left-2">
          1
        </Badge>
        <LockClosedIcon width="18" height="18" />          
        Your Cart
      </Button>
    </Link>
  )
}

export default CartButton