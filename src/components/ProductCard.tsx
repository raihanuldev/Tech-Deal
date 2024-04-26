import { productInterface } from '@/interface/ProductInterface';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard: React.FC<{product:productInterface}> = ({product}) => {
  console.log(product._id)
    return (
        <Link href={`/products/662a5e4e5ab844f35ab06b7a`} >
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
            <p className="py-3">
              {product.description}
            </p>
            <h1 className="text-xl font-bold text-[#ff6801]">${product.price}</h1>
            <span className="text-sm line-through  text-gray-400">${500+product.price}</span>
            <span className="text-sm pl-2  text-gray-800">-45%</span>
          </div>
        </Link>
    );
};

export default ProductCard;