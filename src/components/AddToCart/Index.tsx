import {  useState } from "react";
import * as Toast from '@radix-ui/react-toast';
import { Button, Text } from "@radix-ui/themes";
import { useCartProducts } from '@services/hooks/cart';
export type Props = {
  id: number,
  description: string,
}

export const AddToCartButton = ({ id, description } : Props) => {
  const [open, setOpen] = useState(0);
  const { removeCartProduct, addCartProduct } = useCartProducts()

  const onSave = () => {
    addCartProduct(id)
    setOpen(open +1)
  }

  const onUndo = () => {
    removeCartProduct(id);
  }

  return (
    <div>
        <Button size={{ initial: '4', sm: '3' }} onClick={onSave}>
          Add to cart
        </Button>
          {Array.from({ length: open }).map((_, index) => (
          <Toast.Root
            className="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
            key = {`id-${index}`}
            duration={1600}
          >
            <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
              <Text>Added to cart</Text>
            </Toast.Title>
            <Toast.Description asChild>
              <Text>{description}</Text>
            </Toast.Description>
            <Toast.Action className="[grid-area:_action]" asChild altText="undo add to cart">
              <Button size="2" variant="outline" onClick={onUndo}>
                Undo
              </Button>
            </Toast.Action>
          </Toast.Root>
          ))}
    </div>
  )
}