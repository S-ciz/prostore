
import Price from "@/components/product/price";
import ImageComponent from "@/components/product/ImageComponent";
import { getProduct } from "@/lib/actions/product"
import { notFound } from "next/navigation";

export default async function ProductPage(props:{
    params: Promise<{slug:string}>
}) {

     
   const param = await props.params;
   const product = await getProduct(param.slug)

   if(!product) return notFound()

  return (
    <div className="container m-auto mt-7  px-10">
      <section className=" grid md:grid-cols-5 gap-5  sm:grid-cols-1 ">
        <div className="md:col-span-3 grid justify-center items-center object-cover">
        <ImageComponent images={product.images}/>
        </div>
        <div className="">
          <p> {product.category}</p>
          <p className="font-bold text-[1.5rem] py-5">
           {product.name}
          </p>
          <p> {Number(product.rating)} of 10 Reviews</p>

          <div className="rounded-2xl mt-6 w-20  text-center grid justify-center item-center text-green-900 text-[1.5rem]  bg-green-100">
           <Price price={Number(product.price)}/>
          </div>

          <p className="font-bold mt-6">Description</p>
          <p>{product.description}</p>
        </div>
        <div className="border rounded p-3 max-h-max ">
          <aside className="flex justify-between items-center py-2">
            <p>Price</p>
            <span><Price price={Number(product.price)}/></span>
          </aside>
          <aside className="flex justify-between items-center py-2">
            <p>Status</p>
            <p className={product.stock > 0 ? "" : "text-red-500 "}>{product.stock > 0 ? 'In Stock': "Out of stock"}</p>
          </aside>

          {product.stock > 0 && (<button className="bg-gray-800 hover:cursor-pointer text-white rounded grid w-full py-2 mt-2">
            Add to Cart
          </button>)}
        </div>
      </section>
    </div>
  );
}
