"use-client"
import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { productInterface } from "@/interface/ProductInterface";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slice/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product: NextPage<{product: productInterface}> = ({product}) => {
  const notify = () => toast("Product Added On Cart Succesfully");
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const { productid } = router.query;
  // console.log(router);
  // console.log(product);

  const handleAddToCart =async()=>{

    if (user){
      const cartItem = {
        ...product,
        buyerEmail:user.email
      };
      dispatch(addToCart(cartItem));
      notify()
    }
    else{
      router.push('/login')
    }
  }

  return (
    <div>
      <div className="lg:flex gap-16 items-center bg-[#f5f5f5] p-10">
        <div className="lg:w-4/12 p-5">
          <Image
            className=" lg:mx-auto bg-[#eee9f4] rounded-lg"
            src={product.img}
            alt="product Image"
            width={600}
            height={200}
            unoptimized
          />
        </div>
        <div className="lg:w-7/12 text-left">
          <h1 className="lg:text-2xl text-lg">{product.model}</h1>
          <div className="flex items-center justify-start gap-2 py-2">
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
            <span className="text-sm text-center">(150 ratings)</span>
          </div>
          <div className="pb-1">
            <span>Category: </span>
            <span>{product.category}</span>
          </div>
          <div className="pb-2">
            <span>Seller: </span>
            <span>{product.seller}</span>
          </div>
          <div className="pb-2">
            <span>Verified:</span>
            {product?.verified === "true" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1c9cea"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                className="w-6 h-6 inline ml-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline ml-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            )}
          </div>
          <hr />
          <h1 className="text-xl font-bold text-[#ff6801] pt-5">${product.price}</h1>
          <span className="text-sm line-through  text-gray-400">${product.price + 15}</span>
          <span className="text-sm pl-2  text-gray-800">-4%</span>

          <div className="flex items-center gap-2 py-5">
            {user ? (
              <button>
                <label
                  className="bg-[#2abbe8] p-3 cursor-pointer lg:px-16 px-6 rounded-sm text-white"
                  htmlFor="buyModal"
                >
                  Buy Now
                </label>
              </button>
            ) : (
              <Link href="/signin">
                <button className="bg-[#2abbe8] p-2 lg:px-16 px-6 rounded-sm text-white">
                  Login to buy
                </button>
              </Link>
            )}
            {user ? (
              <button onClick={handleAddToCart}>
                <label
                  className="bg-[#f57224] p-3 cursor-pointer lg:px-16 px-6 rounded-sm text-white"
                  htmlFor="buyModal"
                >
                  Add to cart
                </label>
              </button>
            ) : (
              <Link href="/signin">
                <button className="bg-[#f57224] p-2 lg:px-16 px-5 rounded-sm text-white">
                  Login to Cart
                </button>
              </Link>
            )}
          </div>
          {user && (
            <button className="bg-gray-300 text-xs px-1 rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block pr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              Report product
            </button>
          )}
        </div>
      </div>
      <div className="text-left container mx-auto bg-white my-6 p-10">
        <h1 className="text-md font-semibold  bg-slate-50 py-3">
          Product details of {product.model}
        </h1>
        <p className="lg:w-4/5">{product.description}</p>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Product;

//  getStaticPaths function
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://tech-deal-backend-o5ta.vercel.app/products");
  const products = await res.json();
  const paths = products.map((product: { _id: string }) => ({
    params: { productid: product._id},
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { params } = context;
    const productid = params?.productid as string;
    
    if (!productid) {
      throw new Error('Invalid product id');
    }
    
    const res = await fetch(`https://tech-deal-backend-o5ta.vercel.app/products/${productid}`);
    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }
    
    const product: productInterface = await res.json();

    return {
      props: {
        product: product
      },
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return {
      notFound: true, 
    };
  }
};
