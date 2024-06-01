import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./custom-tabs.css"; 
import AllProducts from "./adminComponets/AllProducts";
import AllUsers from "./adminComponets/AllUsers";
import PayementsInfoAdmin from "./adminComponets/PayementsInfoAdmin";
import ReportedItems from "./adminComponets/ReportedItems";

const AdminDashbord = () => {
  return (
    <div>
      <div className="main-hr flex items-center pt-10 px-2 lg:px-12 text-center bg-[#241a42]">
        <hr className="hr-tag border-gray-300 border-2 w-full rounded-md" />
        <label className="hr-tag block font-medium text-lg text-gray-800 w-96">
          <span className="btn btn-accent btn-sm tracking-[2px] outline-dashed">
            Dashboard | Admin
          </span>
        </label>
        <hr className="hr-tag border-gray-300 border-2 w-full" />
      </div>
      <div className="mx-10">
        <Tabs>
          <TabList className="flex border-b-2 border-gray-200">
            <Tab className="px-4 py-2 cursor-pointer hover:text-blue-500">
              All Products
            </Tab>
            <Tab className="px-4 py-2 cursor-pointer hover:text-blue-500">
              Users
            </Tab>
            <Tab className="px-4 py-2 cursor-pointer hover:text-blue-500">
              Payments
            </Tab>
            <Tab className="px-4 py-2 cursor-pointer hover:text-blue-500">
              Reported Items
            </Tab>
          </TabList>

          <TabPanel>
            <AllProducts />
          </TabPanel>
          <TabPanel>
            <AllUsers />
          </TabPanel>
          <TabPanel>
            <PayementsInfoAdmin />
          </TabPanel>
          <TabPanel>
            <ReportedItems />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashbord;
