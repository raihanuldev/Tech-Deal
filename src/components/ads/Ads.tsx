import { ProductTestInterface } from "@/interface/ProductStaticInterface";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Ads: NextPage = () => {
  const product: ProductTestInterface= {
    _id: "662a5e4e5ab844f35ab06b63",
    id:"1",
    seller: "Raihan",
    sellerEmail: "rihanthedev@gmail.com",
    verified: "true",
    resalePrice: 100,
    originalPrice: 150,
    used: 9,
    location: "Chittagong",
    model: "HP 15s-du1116TU Pentium Silver N5030 15.6 HD Laptop",
    img: "https://m.media-amazon.com/images/I/71RD3vsjIYL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    price: 105,
    description:
      "HP 15.6-inch Laptop, 11th Generation Intel Core i5-1135G7, Intel Iris Xe Graphics, 8 GB RAM, 256 GB SSD, Windows 11 Home (15-dy2024nr, Natural silver)",
    category: "laptop",
  };
  return (
    <div>
      <h1 className="text-3xl font-bold">Today's Ads |</h1>
      {/* example card */}
      <div className="grid space-y-2 md:grid-cols-3">
        {/* 1st card */}
        <Link href={`/products/${product._id}`}>
          <div className="rounded-2xl mx-4 mt-2 shadow-md hover:shadow-lg border-t-4 h-full border-[#3f0a70] cursor-pointer transition-all duration-300 p-5 text-left  ">
            <Image
              className="w-[300px] h-[250px] rounded-2xl  "
              src={product.img}
              alt=""
              unoptimized
              width={100}
              height={100}
            />
            <h3 className="font-bold text-lg pt-3">{product.model}</h3>
            <p className="py-3">{product.description}</p>
            <h1 className="text-xl font-bold text-[#ff6801]">
              ${product.price}
            </h1>
            <span className="text-sm line-through  text-gray-400">
              ${500 + product.price}
            </span>
            <span className="text-sm pl-2  text-gray-800">-45%</span>
          </div>
        </Link>
        {/* 2nd card */}
        <Link href={`/products/${product.id}`}>
          <div className="rounded-2xl mx-4 mt-2 shadow-md hover:shadow-lg border-t-4 h-full border-[#3f0a70] cursor-pointer transition-all duration-300 p-5 text-left  ">
            <Image
              className="w-[300px] h-[250px] rounded-2xl  "
              src={product.img}
              alt=""
              unoptimized
              width={100}
              height={100}
            />
            <h3 className="font-bold text-lg pt-3">{product.model}</h3>
            <p className="py-3">{product.description}</p>
            <h1 className="text-xl font-bold text-[#ff6801]">
              ${product.price}
            </h1>
            <span className="text-sm line-through  text-gray-400">
              ${500 + product.price}
            </span>
            <span className="text-sm pl-2  text-gray-800">-45%</span>
          </div>
        </Link>
        {/* 3rd card */}
        <Link href={`/products/${product.id}`}>
          <div className="rounded-2xl mx-4 mt-2 shadow-md hover:shadow-lg border-t-4 h-full border-[#3f0a70] cursor-pointer transition-all duration-300 p-5 text-left  ">
            <Image
              className="w-[300px] h-[250px] rounded-2xl  "
              src={product.img}
              alt=""
              unoptimized
              width={100}
              height={100}
            />
            <h3 className="font-bold text-lg pt-3">{product.model}</h3>
            <p className="py-3">{product.description}</p>
            <h1 className="text-xl font-bold text-[#ff6801]">
              ${product.price}
            </h1>
            <span className="text-sm line-through  text-gray-400">
              ${500 + product.price}
            </span>
            <span className="text-sm pl-2  text-gray-800">-45%</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Ads;
