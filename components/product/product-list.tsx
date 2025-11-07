import { Product } from "@/lib/types";
import ProductItem from "./product";

const ProductList = ({ limit, prod }: { limit: number, prod: Product[] }) => {
  const products =
    prod.length > limit
      ? prod.slice(0, limit)
      : prod;
  return (
    <div className="grid p-3 mb-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductItem key={product.slug} product={product} />
        ))
      ) : (
        <p>No items </p>
      )}
    </div>
  );
};

export default ProductList;
