"use client";;

import { useEffect, useState } from "react";
import Image from "next/image";

import burgerImg from "@/public/images/burger.jpg";
import curryImg from "@/public/images/curry.jpg";
import dumplingsImg from "@/public/images/dumplings.jpg";
import macncheeseImg from "@/public/images/macncheese.jpg";
import pizzaImg from "@/public/images/pizza.jpg";
import schnitzelImg from "@/public/images/schnitzel.jpg";
import tomatoSaladImg from "@/public/images/tomato-salad.jpg";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const baseImageClass =
    "absolute left-0 top-0 h-full w-full object-cover opacity-0 " +
    "scale-110 -translate-x-4 -rotate-[5deg] " +
    "transition-all duration-500 ease-in-out";

  const activeImageClass =
    "z-10 opacity-100 scale-100 translate-x-0 rotate-0";

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg shadow-[0_0_0.5rem_rgba(0,0,0,0.5)]">
      {images.map((item, index) => (
        <Image
          key={index}
          src={item.image}
          alt={item.alt}
          fill
          className={
            index === currentImageIndex
              ? `${baseImageClass} ${activeImageClass}`
              : baseImageClass
          }
          priority={index === 0}
          sizes="(max-width: 768px) 90vw, 40rem"
        />
      ))}
    </div>
  );
}
