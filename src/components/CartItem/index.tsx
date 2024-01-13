import { Flex, Text, Button, IconButton, Box } from '@radix-ui/themes';
import { useGetProductQuery } from '@api/products';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { useCartProducts } from '@services/hooks';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

export type CartProps = {
  productId: number,
  quantity: number
}

export const CartItem = ({ productId, quantity }: CartProps): JSX.Element => {
  const { removeAllCartProduct, removeCartProduct, addCartProduct } = useCartProducts()
  const {data, isFetching} = useGetProductQuery(productId)

  const removeItemFromCart = () => {
    removeCartProduct(productId)
  }

  const removeAllItemFromCart = () => {
    removeAllCartProduct(productId)
  }

  const addItemToCart = () => {
    addCartProduct(productId)
  }

  if (isFetching || !data) return (<></>)
  const { title, thumbnail, price, description } = data
  return (
    <Box className="shadow-blue-500/50 w-full overflow-hidden rounded-md shadow-[0_2px_5px] max-w-[600px] h-full">
      <Flex direction="row">
        <div className="w-48 sm:w-24">
          <AspectRatio.Root ratio={16 / 9}>
            <img
              src={thumbnail}
              alt={description}
              className="h-48 sm:h-24 object-cover"
            />
          </AspectRatio.Root>        
        </div>
        <Flex gap="4" direction="column" m={"2"} className="w-full max-w-64 sm:max-w-[100vw]"> 
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-y-4">
            <p className="text-lg max-w-48 sm:max-w-80 font-semibold uppercase text-ellipsis overflow-hidden text-nowrap">{title}</p>
            <Flex gap="2" align="center" >
              {(quantity > 1) && <Text as="p" size="3" color='gray' trim='both'>€ {price}</Text>}
              <Text as="p" size="3" trim='both'>Tot: € ${price * quantity}</Text>
            </Flex>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-y-4">
            <Flex gap="2" align="center" >
              <IconButton onClick={removeItemFromCart} disabled={quantity === 1}>
                <MinusIcon width="14" height="14"/>
              </IconButton> 
              {quantity}
              <IconButton onClick={addItemToCart}>
                <PlusIcon width="14" height="14"/>
              </IconButton>  
            </Flex>
            <Button className="w-24" color="orange" onClick={removeAllItemFromCart}>Remove</Button>
          </div>
        </Flex>
      </Flex>
    </Box>
  )
}
