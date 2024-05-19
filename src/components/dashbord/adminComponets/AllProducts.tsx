import React, { useEffect, useState } from "react";
import ProductRow from "./ProductRow";
import { productInterface } from "@/interface/ProductInterface";

const AllProducts = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
  
  return (
    <div className="overflow-x-auto ">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Product Model</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         
        {
            products.map((product,index)=> <ProductRow key={index}  product={product} index={index+1}/>)
        }
        
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
