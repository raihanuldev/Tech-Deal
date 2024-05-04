import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const CategoriesProducts: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold my-4">Categories | </h1>
      <div className="grid grid-cols-2 md:grid-cols-6 space-x-1">
        <Link href='/category' className="border p-3 rounded-lg">
          <Image
            src="https://m.media-amazon.com/images/I/715isFdkQVL._AC_SX679_.jpg"
            alt="category"
            width={200}
            height={100}
            unoptimized
          />
          
        </Link>
        <div className="border p-3 rounded-lg">
          <Image
            src="https://media.istockphoto.com/id/185278433/photo/black-digital-slr-camera-in-a-white-background.jpg?s=1024x1024&w=is&k=20&c=UjIzN8-KrVm1urSdQdwmfsy2Iiln2Si6AZozCx5F6dM="
            alt="category"
            width={200}
            height={100}
            unoptimized
          />
        </div>
        <div className="border p-3 rounded-lg">
          <Image
            src="https://m.media-amazon.com/images/I/610FHtXsfnL._AC_SX679_.jpg"
            alt="category"
            width={200}
            height={100}
            unoptimized
          />
        </div>
        <div className="border p-3 rounded-lg">
          <Image
            src="https://dnamcomputer.web.app/static/media/headphones.949f1c42646cafb4bfd3.jpg"
            alt="category"
            width={200}
            height={100}
            unoptimized
          />
        </div>
        <div className="border p-3 rounded-lg">
          <Image
            src="https://m.media-amazon.com/images/I/612yrAXpo-L._AC_SX679_.jpg"
            alt="category"
            width={200}
            height={100}
            unoptimized
          />
        </div>
        <div className="border p-3 rounded-lg bg-base-">
          <Image
            src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSTWCrtltGP56upxmamr6xulMM3Eb2aMVhVAHpPW90KAQRchm-fxRuuRhzqgNdd0tmt8YgUHy7EycWGF-5bM2w"
            alt="category"
            width={200}
            height={100}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriesProducts;
