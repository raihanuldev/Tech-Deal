import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ManageCart from "./buyerComponents/ManageCart";
import OrderHistory from "./buyerComponents/OrderHistory";
import RequestForSeller from "./buyerComponents/RequestForSeller";
import "./custom-tabs.module.css"; // Custom CSS file to override React Tabs styles

const BuyerDashbord = () => {
  return (
    <div>
      
      <div className="main-hr flex items-center pt-10 px-2 lg:px-12 text-center">
        <hr className="hr-tag border-gray-300 border-2 w-full rounded-md" />
        <label className="hr-tag block font-medium text-lg text-gray-800 w-96">
          <span className="btn btn-accent btn-sm tracking-[2px] outline-dashed">
            Dashbord | Buyer
          </span>
        </label>
        <hr className="hr-tag border-gray-300 border-2 w-full" />
      </div>
      <div className="mx-10">
        <Tabs>
          <TabList className="flex border-b-2 border-gray-200">
            <Tab className="px-4 py-2 cursor-pointer hover:text-blue-500">
              Manage Cart
            </Tab>
            {/* <Tab className="px-4 py-2 cursor-pointer hover:text-blue-500">
              Orders History
            </Tab>
            <Tab className="px-4 py-2 cursor-pointer hover:text-blue-500">
              Become a Seller
            </Tab> */}
          </TabList>

          <TabPanel>
            <ManageCart />
          </TabPanel>
          {/* <TabPanel>
            <OrderHistory />
          </TabPanel>
          <TabPanel>
            <RequestForSeller />
          </TabPanel> */}
        </Tabs>
      </div>
    </div>
  );
};

export default BuyerDashbord;
