import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const CategoriesProducts: NextPage = () => {
  // Define an array of categories with their names and image URLs
  const categories = [
    { name: "laptop", imageUrl: "https://m.media-amazon.com/images/I/715isFdkQVL._AC_SX679_.jpg" },
    { name: "camera", imageUrl: "https://media.istockphoto.com/id/185278433/photo/black-digital-slr-camera-in-a-white-background.jpg?s=1024x1024&w=is&k=20&c=UjIzN8-KrVm1urSdQdwmfsy2Iiln2Si6AZozCx5F6dM=" },
    { name: "watch", imageUrl: "https://m.media-amazon.com/images/I/610FHtXsfnL._AC_SX679_.jpg" },
    // { name: "headphone", imageUrl: "https://dnamcomputer.web.app/static/media/headphones.949f1c42646cafb4bfd3.jpg" },
    { name: "smartphone", imageUrl: "https://m.media-amazon.com/images/I/612yrAXpo-L._AC_SX679_.jpg" },
    // { name: "monitor", imageUrl: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSTWCrtltGP56upxmamr6xulMM3Eb2aMVhVAHpPW90KAQRchm-fxRuuRhzqgNdd0tmt8YgUHy7EycWGF-5bM2w" }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold my-6">Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <Link key={index} href={`/products/category/${category.name}`}>
            <div className="relative block w-full h-48 md:h-64 lg:h-72 overflow-hidden rounded-lg border border-gray-200 hover:border-indigo-500">
              <Image
                src={category.imageUrl}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                unoptimized
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesProducts;
