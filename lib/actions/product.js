
"use server"
import { PrismaClient } from "@prisma/client";


export async function getLatestProducts() {
 const prisma = new PrismaClient();
  const data = await prisma.product.findMany({});

  return data;
}
