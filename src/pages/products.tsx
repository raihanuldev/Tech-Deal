import React, { useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const ProductsPage: NextPage = () => {
  const [btnDisable, setbtnDisable] = useState<boolean>(true);
  return (
    <div className="md:px-10 bg-[#f9f6fd] h-screen">
      <h1>Hello Next.js Page!</h1>
      {/* simple Cart static */}
      <div className="grid md:grid-cols-3">
        
        <div className="rounded-2xl mx-4 mt-2 shadow-md hover:shadow-lg border-t-4 h-full border-[#3f0a70] cursor-pointer transition-all duration-300 p-5 text-left  ">
          <span className="ribbon"></span>
          <Image
            className="w-[250px] rounded-2xl  "
            src="https://static-01.daraz.com.bd/p/9fa4b52503b23ad2cb33bfb2e3ed23aa.png"
            alt=""
            unoptimized
            width={100}
            height={100}
          />
          <h3 className="font-bold text-lg pt-3">Microphone</h3>
          <p className="py-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
          <h1 className="text-xl font-bold text-[#ff6801]">$23</h1>
          <span className="text-sm line-through  text-gray-400">$410</span>
          <span className="text-sm pl-2  text-gray-800">-45%</span>
          
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
