import React, { useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { productInterface } from "@/interface/ProductInterface";

const ProductsPage: NextPage<{products:productInterface}> = ({products  }) => {
  console.log(products);
  const [btnDisable, setbtnDisable] = useState<boolean>(true);
  
  return (
    <div className="md:px-10 bg-[#f9f6fd] h-screen">
      {/* simple Cart static */}
      <div className="grid md:grid-cols-3">
        {
          products.map((product) => <ProductCard key={product.id} product={product}/>)
        }
      </div>
    </div>
  );
};

export default ProductsPage;


export const getStaticProps =async()=>{
  const res = await fetch('http://localhost:5000/products');
  const data:productInterface[] = await res.json();
  return {
    props:{
      products:data
    }
  }
}