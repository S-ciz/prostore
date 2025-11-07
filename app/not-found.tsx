import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function NotFound ()
{

    return <div className=" h-[50vh] w-screen grid items-center justify-center m-auto">
       <div className="shadow p-5 grid  justify-items-center rounded">
         <Image src="/images/logo.svg" alt="logo" width={50} height={50}/>
          <h1 className="my-2 text-[1.5rem] font-bold">Page not found</h1>
          <p className="mb-4">The page you are looking for does not exist</p>
         <Link href={"/"}>
          <Button>Go to Home</Button>
         </Link>
       </div>
    </div>
}