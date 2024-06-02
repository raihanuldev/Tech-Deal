import dynamic from "next/dynamic";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../dashbord/custom-tabs.css"; 
import ManageCart from "./buyerComponents/ManageCart";

const MyProducts = dynamic(() => import("./sellerComponents/MyProducts"), {
  ssr: false,
});
const AddNewProduct = dynamic(
  () => import("./sellerComponents/Add-NewProduct"),
  {
    ssr: false,
  }
);
const OrderHistorySellerDashbord = dynamic(
  () => import("./sellerComponents/OrderHistorySellerDashbord"),
  {
    ssr: false,
  }
);

const SellerDashbord = () => {
  return (
    <div>
      <div className="main-hr flex items-center pt-10 px-2 lg:px-12 text-center">
        <hr className="hr-tag border-gray-300 border-2 w-full rounded-md" />
        <label className="hr-tag block font-medium text-lg text-gray-800 w-96">
          <span className="btn btn-accent btn-sm tracking-[2px] outline-dashed">
            Dashboard | Seller
          </span>
        </label>
        <hr className="hr-tag border-gray-300 border-2 w-full" />
      </div>
      <div className="mx-10">
        <Tabs>
          <TabList className="flex border-b-2 border-gray-200">
            <Tab className="px-4 py-2 cursor-pointer hover:text-blue-500">
              MY Products
            </Tab>
            <Tab className="px-4 py-2 cursor-pointer hover:text-blue-500">
              ADD NEW
            </Tab>
            <Tab className="px-4 py-2 cursor-pointer hover:text-blue-500">
              Manage Cart
            </Tab>
          </TabList>

          <TabPanel>
            <MyProducts />
          </TabPanel>
          <TabPanel>
            <AddNewProduct />
          </TabPanel>
          <TabPanel>
            <ManageCart />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default SellerDashbord;
