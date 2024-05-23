import { productInterface } from '@/interface/ProductInterface';
import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

const ProductRowSeller: NextPage<{ product: productInterface }> = ({ product }) => {
    const { model, category, description, img, price } = product;

    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <Image alt="product-img" src={img} width={100} height={150} unoptimized />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{model}</div>
                        <div className="text-xl opacity-50">{category}</div>
                    </div>
                </div>
            </td>
            <td>
                {description}
                <br />
                <span className="badge badge-ghost badge-sm">
                    {category}
                </span>
            </td>
            <th>
                <button className="btn btn-ghost btn-primary btn-outline">Edit</button>
            </th>
        </tr>
    );
};

export default ProductRowSeller;
