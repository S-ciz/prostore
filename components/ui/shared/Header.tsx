"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";
import { ShoppingCart } from "lucide-react";
import Dropdown from "@/components/dropdown";
import { useState, useEffect } from "react";

import Menu from "@/components/menu";


const Header = () => {


  const [mounted, setMounted] = useState(false);

  useEffect(()=>{
      
    setMounted(true)

  }, [])


  if(!mounted){return null;}



  return (
    <header className="border-b-3 border-[#f7f7f7]">
      <div className="container flex justify-between items-center m-auto  p-3">
        <Link className="flex gap-2 items-center" href="/">
          <Image
            width={50}
            height={50}
            alt="shopping logo"
            src="/images/logo.svg"
          />
          <h1 className="md:block hidden text-[1.5rem]">Prostore</h1>
        </Link>

        <section className="hidden md:flex items-center gap-5">
       
          <Dropdown/>
          <Button className="border-none outline-none" variant="outline">
            {" "}
            <ShoppingCart /> Cart
          </Button>
          <Button className="border-none">Sign in</Button>
        </section>

        <section className="lg:hidden md:hidden sm:flex">
          <Menu/>
        </section>
      </div>
    </header>
  );
};

export default Header;
