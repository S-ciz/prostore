"use client";

import Image from "next/image";
import { useState } from "react";
export default function ImageComponent({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <Image height={500} width={500} alt={images[index]} src={images[index]} />

      <section className="flex flex-wrap gap-2 mt-2">
        {images.map((img, idx) => (
          <Image
            onClick={() => setIndex(idx)}
            className= { idx === index ? "cursor-pointer border-2 border-orange-500" : "border cursor-pointer" }
            key={idx}
            height={100}
            width={100}
            src={img}
            alt={img}
          />
        ))}
      </section>
    </div>
  );
}
