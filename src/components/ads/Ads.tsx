import { productInterface } from "@/interface/ProductInterface";
import { ProductTestInterface } from "@/interface/ProductStaticInterface";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCard from "../ProductCard";

const Ads: NextPage<{ products: productInterface }> = ({ products }) => {
  // console.log(products);
  return (
    <div>
      <h1 className="text-3xl font-bold">Today&apos;s Ads |</h1>
      {/* example card */}
      <div className="grid space-y-2 md:grid-cols-3">
        {/* {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))} */}
        
      </div>
    </div>
  );
};

export default Ads;

// export const getStaticProps = async () => {
//   const res = await fetch('https://tech-deal-backend-o5ta.vercel.app/products');
//   // const res = await fetch("https://tech-deal-backend-o5ta.vercel.app/products");
//   const data: productInterface[] = await res.json();
//   return {
//     props: {
//       products: data,
//     },
//   };
// };
