import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyProducts from "./sellerComponents/MyProducts";

const SellerDashbord = () => {
  return (
    <div>
      <div className="main-hr flex items-center pt-10 px-2 lg:px-12 text-center">
        <hr className="hr-tag border-gray-300 border-2 w-full rounded-md" />
        <label className="hr-tag block font-medium text-lg text-gray-800 w-96">
          <span className="btn btn-accent btn-sm tracking-[2px] outline-dashed">
            Dashbord| Seller
          </span>
        </label>
        <hr className="hr-tag border-gray-300 border-2 w-full" />
      </div>
      <div className="mx-10">
        <Tabs>
          <TabList>
            <Tab>MY Products</Tab>
            <Tab>Orders History</Tab>
            <Tab>ADD NEW</Tab>
          </TabList>

          <TabPanel>
            <MyProducts/>
          </TabPanel>
          <TabPanel>
            <h2>Cart Items</h2>
          </TabPanel>
          <TabPanel>
            <h2>Order History</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default SellerDashbord;
