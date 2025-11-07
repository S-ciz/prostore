import { PrismaClient } from "@prisma/client";
import sampleData from "@/sample-data/db/sample-data";

const {products} = sampleData;
 
 const prisma = new PrismaClient()

async function main()
{  

 
    //clear database
    console.log("instatianted prisma")

    await prisma.product.deleteMany();

    console.log('cleared products dataase')

    //create products

    await prisma.product.createMany({data: products})
    console.log("Database seeded succesesfully")

}

main()
.then(async()=>{
  await prisma.$disconnect()
}).catch(async(e)=>{
   console.log('displaying error...')
   console.log(e)
   await prisma.$disconnect();
   process.exit(1)
})