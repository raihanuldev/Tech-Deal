import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCart";
import ProductCart from "./ProductCart";

const ManageCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="grid md:grid-cols-3 space-x-1 space-y-1">
      {cartItems.map((cart) => (
        <ProductCart key={cart._id} product={cart} />
      ))}
    </div>
  );
};

export default ManageCart;
