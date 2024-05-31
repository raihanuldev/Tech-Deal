import auth from "@/firebase/firebase.auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Form, useForm } from "react-hook-form";
import { json } from "stream/consumers";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNewProduct = () => {
    const notify = () => toast("Product Added Succesfully");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user] = useAuthState(auth);
  const onSubmit = (data: any) => {
    // Add code here to handle form submission, e.g., send data to an API
    // console.log(data);
    const product = {
      ...data,
      seller: user?.displayName,
      sellerEmail: user?.email,
      verified: true,
      id: Math.random(),
    };
    fetch("https://tech-deal-backend-o5ta.vercel.app/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }).then(res=>res.json()).then(data=>{
        console.log(data);
        notify()
    })
    // console.log(product);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="model"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Model
          </label>
          <input
            type="text"
            id="model"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="HP Spectre x360 16 f-1003tu"
            {...register("model", { required: true })}
          />
          {errors.model && (
            <span className="text-red-500 text-sm">
              Product model is required
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="location"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Location
          </label>
          <select
            id="location"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("location", { required: true })}
          >
            <option value="">Select a location</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Khulna">Khulna</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Barisal">Barisal</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Mymensingh">Mymensingh</option>
          </select>
          {errors.location && (
            <span className="text-red-500 text-sm">Location is required</span>
          )}
        </div>
        <div>
          <label
            htmlFor="img"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Image URL
          </label>
          <input
            type="text"
            id="img"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="https://m.media-amazon.com/images/I/81cjdARZzhL._AC_SX679_.jpg"
            {...register("img", { required: true })}
          />
          {errors.img && (
            <span className="text-red-500 text-sm">Image URL is required</span>
          )}
        </div>
        <div>
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <select
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("category", { required: true })}
          >
            <option value="">Select a category</option>
            <option value="laptop">Laptop</option>
            <option value="watch">Watch</option>
            <option value="camera">Camera</option>
            <option value="smartphone">Smartphone</option>
          </select>
          {errors.category && (
            <span className="text-red-500 text-sm">Category is required</span>
          )}
        </div>
        <div>
          <label
            htmlFor="resalePrice"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Resale Price
          </label>
          <input
            type="number"
            id="resalePrice"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="100"
            {...register("resalePrice", { required: true })}
          />
          {errors.resalePrice && (
            <span className="text-red-500 text-sm">
              Resale price is required
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="originalPrice"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Original Price
          </label>
          <input
            type="number"
            id="originalPrice"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="150"
            {...register("originalPrice", { required: true })}
          />
          {errors.originalPrice && (
            <span className="text-red-500 text-sm">
              Original price is required
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="used"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Used (in months)
          </label>
          <input
            type="number"
            id="used"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="9"
            {...register("used", { required: true })}
          />
          {errors.used && (
            <span className="text-red-500 text-sm">
              Used duration is required
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description of the product"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="text-red-500 text-sm">
              Description is required
            </span>
          )}
        </div>
      </div>
      {/* <div className="mb-6">
                <label htmlFor="seller" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seller Name</label>
                <input 
                    type="text" 
                    id="seller" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Raihan" 
                    {...register("seller", { required: true })}
                    value={user.displayName || ''}
                    readOnly
                />
                {errors.seller && <span className="text-red-500 text-sm">Seller name is required</span>}
            </div>  */}
      {/* <div className="mb-6">
                <label htmlFor="sellerEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seller Email</label>
                <input 
                    type="email" 
                    id="sellerEmail" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="rihanthedev@gmail.com" 
                    {...register("sellerEmail", { required: true })}
                    value={user.email || ''}
                    readOnly
                />
                {errors.sellerEmail && <span className="text-red-500 text-sm">Seller email is required</span>}
            </div> 
            <div className="mb-6">
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                <input 
                    type="number" 
                    id="price" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="120" 
                    {...register("price", { required: true })}
                />
                {errors.price && <span className="text-red-500 text-sm">Price is required</span>}
            </div> 
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input 
                        id="verified" 
                        type="checkbox" 
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" 
                        {...register("verified")}
                    />
                </div>
                <label htmlFor="verified" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Verified</label>
            </div> */}
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4"
      >
        Add Product
      </button>
      <ToastContainer/>
    </form>
  );
};

export default AddNewProduct;
