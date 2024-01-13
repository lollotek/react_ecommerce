import { useGetProductListQuery } from '@api/products';
import { Flex, Section, Text } from '@radix-ui/themes';
import { useCartProducts } from '@services/hooks';
import { useMemo } from 'react';

function CartRecap() {
  const { cartProducts } = useCartProducts()
  const { data, isFetching } = useGetProductListQuery(cartProducts.map(product => product.productId))
 
  const total = useMemo(() => {
    if (!data || isFetching) return 0
    const productsQntPrice = cartProducts.map(({quantity, productId}) => ({ qnt: quantity, price: data.find(({id}) => id === productId )?.price || 0}))
    return productsQntPrice?.reduce( (acc, {price, qnt}) => (acc + (price * qnt) ), 0)
  }, [data, isFetching, cartProducts]);

  return (
    <Section mx="4" my="4" pb="0" pt="0">
      {isFetching ? 
        <div className="animate-pulse">
          <div className="bg-slate-500 h-8 w-24 rounded-md">
          </div>
        </div> 
      : 
        <Flex gap="2" align="center">
          <Text as="p" className="mt-4 text-l font-bold tracking-tight text-gray-600">Total</Text>
          <Text as="p" className="mt-4 text-xl font-bold tracking-tight text-black">€ {total}</Text>
        </ Flex>
      }
    </Section>
  )
}

export default CartRecap