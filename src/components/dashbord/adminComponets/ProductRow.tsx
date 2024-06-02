import { productInterface } from "@/interface/ProductInterface";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const ProductRow: NextPage<{ product: productInterface; index: number }> = ({
  product,
  index,
}) => {
  const openModal = () => {
    const modal = document.getElementById("my_modal_5") as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <tr>
      <th>{index}</th>
      <td>{product.model}</td>
      <td>{product.location}</td>
      <td>
        <Link href={`/products/${product._id}`} className="btn">
          View
        </Link>
      </td>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-[#8c76db]">
          <h3 className="font-bold text-lg">
            Product Details About {product.model}
          </h3>
          <p className="text-2xl py-4 font-semibold">Product Seller Info: </p>
          <p className="text-xl">Seller Email: {product?.sellerEmail}</p>
          <p className="text-xl">Seller: {product.seller}</p>
          <p className="text-2xl py-4 font-semibold">Product details: </p>
          <p className="text-xl">Total Sold: {product.used}</p>
          <p className="text-xl"> {product.description}</p>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </tr>
  );
};

export default ProductRow;