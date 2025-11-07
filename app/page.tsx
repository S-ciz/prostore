import ProductList from "@/components/product/product-list"

import { getLatestProducts } from "@/lib/actions/product"

export default async function Home() {

  const products = JSON.parse(JSON.stringify( await getLatestProducts()));
 
  return <div className="container m-auto">

    <h1 className="mt-12 px-3 font-bold">Latest Products</h1>
    <ProductList prod={products} limit={6}/>
  </div>
}
