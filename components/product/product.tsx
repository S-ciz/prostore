import Image from "next/image";
import Link from "next/link";
import Price from "./price";
import { Product } from "@/lib/types";

export default function ProductItem({ product }:{product:Product}) {
  return (
    <Link href={`/products/${product.slug}`}> 
    <div className="shadow rounded border border-[#f7f7f7] grid justify-content-center ">
        <Image className="grid justify-items-center m-auto pt-2"  width={300} height={300} alt={product.slug} src={product.images[0]}/>
       <section className="p-3 container">
         <small className="mb-5">{product.brand}</small>
         <h1 className="text-l font-bold py-3 text-[#333]">{product.name}</h1>
         <div className="flex justify-between items-center">
            <span><h1 className="text-xl">4.5</h1> </span>
           {product.stock > 0 ? ( <Price price={Number(product.price)}/>): (<p className="text-red-400 text-xl">Out of stock</p>)}
         </div>
       </section>
    </div>
    </Link>
  );
}
