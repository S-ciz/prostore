
"use server"
import { PrismaClient } from "@prisma/client";


export async function getLatestProducts() {
 const prisma = new PrismaClient();
  const data = await prisma.product.findMany({});

  return data;
}

export async function getProduct(slug)
{
  const prisma = new PrismaClient();

  const data = await prisma.product.findFirst({
    where: {
      slug:{
        equals: slug
      }
    }
  })

  return data;
}
