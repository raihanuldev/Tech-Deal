import React, { useState } from "react";
import { NextPage } from "next";
import { userRole } from "@/interface/UserInfoInterface";
import SellerDashbord from "@/components/dashbord/SellerDashbord";
import BuyerDashbord from "@/components/dashbord/BuyerDashbord";
import AdminDashbord from "@/components/dashbord/AdminDashbord";

const Dashbord: NextPage = () => {
  const [userRole, setUserRole] = useState<userRole>("admin");

  if (userRole == "admin") {
    return <AdminDashbord />;
  }
  if (userRole == "seller") {
    return <SellerDashbord />;
  }
  if (userRole == "buyer") {
    return <BuyerDashbord />;
  }
  
};

export default Dashbord;
