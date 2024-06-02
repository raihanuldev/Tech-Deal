import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { userRole } from "@/interface/UserInfoInterface";
import SellerDashbord from "@/components/dashbord/SellerDashbord";
import BuyerDashbord from "@/components/dashbord/BuyerDashbord";
import AdminDashbord from "@/components/dashbord/AdminDashbord";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth";

const Dashbord: NextPage = () => {
  const [user] = useAuthState(auth)
  const [userRole, setUserRole] = useState<userRole>("buyer");

  useEffect(()=>{
    if(user){
      fetch(`http://localhost:5000/api/auth/${user.email}`).then(res=>res.json()).then(data=>setUserRole(data.role))
    }
  },[user])
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
