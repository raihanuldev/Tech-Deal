import { productInterface } from "@/interface/ProductInterface";
import { NextPage } from "next";
import React from "react";

const ProductRow:NextPage<{product: productInterface,index:number } > = ({product,index}) => {

  return (
    <tr>
      <th>{index}</th>
      <td>{product.model}</td>
      <td>{product.location}</td>
      <td>
        <button className="btn-sm">View Info</button>
      </td>
    </tr>
  );
};

export default ProductRow;
