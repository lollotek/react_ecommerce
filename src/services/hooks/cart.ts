import { CartProps } from "@components/CartItem";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useCallback, useMemo } from "react";

export const useCartProducts = () => {
  const [cart, saveCart] = useLocalStorage<Array<number>>("cart", []);

  const cartProducts = useMemo(() => {
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

  const cartProductsCounter = useMemo(() => {
    if (!cart) return 0
    return cart?.length
  }, [cart])

  const removeCartProduct = useCallback((productId: number) =>
  {
    const indexToRemove = cart.indexOf(productId)
    saveCart([
      ...cart.slice(0, indexToRemove),
      ...cart.slice(indexToRemove+1)
    ])
  }, [cart])

  const removeAllCartProduct = useCallback((productId: number) =>
  {
    const cartCleaned = cart.reduce(
      (accumulator, id) => (((productId === id) ? accumulator : [...accumulator, id])),
      [] as Array<number>
    );
    saveCart(cartCleaned)
  }, [cart])

  const addCartProduct = useCallback((productId: number) =>
  {
    saveCart([...cart, productId])
  }, [cart])

  return {cartProducts, removeCartProduct, removeAllCartProduct, addCartProduct, cartProductsCounter}
}