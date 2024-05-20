import { NextPage } from "next";
import Image from "next/image";
import React from "react";

const MyProducts: NextPage = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Product info</th>
            <th>Total Sell</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
        
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <Image alt="product-img" src='https://m.media-amazon.com/images/I/61G9Yr3n6rL._AC_SX679_.jpg' width={100} height={100} unoptimized/>
                  </div>
                </div>
                <div>
                  <div className="font-bold">HP XYZ WS</div>
                  <div className="text-sm opacity-50">Chittagong</div>
                </div>
              </div>
            </td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nobis.
              <br />
              <span className="badge badge-ghost badge-sm">
                Lapptop
              </span>
            </td>
            <td>90</td>
            <th>
              <button className="btn btn-ghost btn-primary">Edit</button>
            </th>
          </tr>
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
