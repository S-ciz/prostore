export type Product = {
    id:string,
  name: string;
  slug: string;
  category: string;
  description: string;
  images: string[];
  price: number;
  stock: number;
  brand: string;
  rating: number;
  numReviews: number;
  isFeatured: boolean;
  banner?: string;
  createdAt?: Date;
};

export type ProductPageProp = {
 
 slug: string;

   
  };

