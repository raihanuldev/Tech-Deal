import auth from "@/firebase/firebase.auth";
import { productInterface } from "@/interface/ProductInterface";
import { removeFromCart } from "@/redux/slice/cartSlice";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCart: React.FC<{ product: productInterface }> = ({ product }) => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const notify = () => toast("Item Removed from Cart Successfully!");
  const BuyNotify = () => toast("Order Place Successfully!");

  const handleRemoveFromCart = async () => {
    dispatch(removeFromCart(product._id));
    notify();
  };
  const handleBuyNow = async () => {
    BuyNotify();
    const NewProduct = {product, buyerEmail: user?.email };
    console.log(NewProduct);
    fetch("https://tech-deal-backend-o5ta.vercel.app/process-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(NewProduct),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    handleRemoveFromCart();
  };

  return (
    <div className="h-auto p-4 bg-[#f5f5f5] rounded-lg flex flex-col justify-between">
      <div>
        <h1 className="text-2xl">{product.model}</h1>
        <div className="flex items-center gap-2 py-2">
          <div className="rating w-16 pointer-events-none">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <span className="text-sm">(150 ratings)</span>
        </div>
        <div>
          <span>Category: {product.category}</span>
        </div>
        <div>
          <span>Seller: {product.seller}</span>
        </div>
        <div className="flex items-center">
          <span>Verified:</span>
          {product.verified === "true" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#1c9cea"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-6 h-6 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
          )}
        </div>
        <hr />
        <h1 className="text-xl font-bold text-[#ff6801] pt-5">
          ${product.price}
        </h1>
        <span className="text-sm line-through text-gray-400">
          ${product.price + 15}
        </span>
        <span className="text-sm pl-2 text-gray-800">-4%</span>
      </div>
      <div className="flex items-center justify-between gap-2 py-5">
        <button
          onClick={handleBuyNow}
          className="bg-[#2abbe8] p-3 w-full rounded-sm text-white"
        >
          <label
            className="cursor-pointer w-full text-center"
            htmlFor="buyModal"
          >
            Buy
          </label>
        </button>
        <button
          onClick={handleRemoveFromCart}
          className="bg-[#2abbe8] p-3 w-full rounded-sm text-white"
        >
          Remove From Cart
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ProductCart;
