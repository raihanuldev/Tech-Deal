import auth from "@/firebase/firebase.auth";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ProductRowSeller from "./ProductRowSeller";

const MyProducts = () => {
  const [user] = useAuthState(auth);
  const [products,setProducts] = useState([])
  
  useEffect(()=>{
    fetch(`https://tech-deal-backend-o5ta.vercel.app/api/seller/myproducts/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[user])
  if (products.length === 0){
    return <p className="text-center text-2xl">Loading........</p>
  }
  return (
    <div className="overflow-x-auto">
      <p className="text-center text-2xl font-semibold">My Products: {products.length}</p>
      <table className="table">
        {/* head */}
        <thead>
        <tr>
            
            <th>Name</th>
            <th>Product info</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product,index)=> <ProductRowSeller key={index} product={product}/>)
          }
          
        </tbody>
        {/* foot */}
        <tfoot>
         <p>Tech Deal Seller Dashbord</p>
        </tfoot>
      </table>
    </div>
  );
};

export default MyProducts;

