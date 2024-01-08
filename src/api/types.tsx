export type Product =  {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: Array<string>
}

export type Params =  {
    limit: number,
    skip: number,
    total: number
}


export type ProductResponse = Params & {
    products: Array<Product>,
}