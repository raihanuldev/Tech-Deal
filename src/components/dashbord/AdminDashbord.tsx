import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AdminDashbord = () => {
  return (
    <div>
      <div className="main-hr flex items-center pt-10 px-2 lg:px-12 text-center">
        <hr className="hr-tag border-gray-300 border-2 w-full rounded-md" />
        <label className="hr-tag block font-medium text-lg text-gray-800 w-96">
          <span className="btn btn-accent btn-sm tracking-[2px] outline-dashed">
            Dashbord| Admin
          </span>
        </label>
        <hr className="hr-tag border-gray-300 border-2 w-full" />
      </div>
      <div className="mx-10">
        <Tabs>
          <TabList>
            <Tab>All Products</Tab>
            <Tab>Users</Tab>
            <Tab>Payments</Tab>
            <Tab>Reported Item</Tab>
          </TabList>

          <TabPanel>
            <h2>products</h2>
          </TabPanel>
          <TabPanel>
            <h2>Seller Info</h2>
          </TabPanel>
          <TabPanel>
            <h2>Payments all</h2>
          </TabPanel>
          <TabPanel>
            <h2>Reported Items</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashbord;
