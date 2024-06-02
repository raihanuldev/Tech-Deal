import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCart";
import ProductCart from "./ProductCart";
import { productInterface } from "@/interface/ProductInterface";

const ManageCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  if (cartItems.length ===0){
    return <p>No Added Cart </p>
  }
  return (
    <div className="my-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2" >
      
      {cartItems?.map((cart) => (
        <ProductCart key={cart._id} product={cart} />
      ))}
    </div>
  );
};

export default ManageCart;
