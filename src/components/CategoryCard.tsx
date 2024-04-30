import { ProductCategoryInterface } from '@/interface/ProductCategoryInterface';
import Image from 'next/image';
import React from 'react';

const CategoryCard: React.FC<{category: ProductCategoryInterface}> = ({category}) => {
    return (
        <div
            className="relative overflow-hidden bg-white shadow-md rounded-lg"
          >
            <Image
              src={category?.imageUrl}
              alt={category?.name}
              className="w-full h-full object-cover"
              unoptimized
              layout="fill"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
              <h3 className="text-lg font-semibold">{category?.name}</h3>
            </div>
          </div>
    );
};

export default CategoryCard;