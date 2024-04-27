import React, { useState } from 'react';
import { NextPage } from 'next';
import { userRole } from '@/interface/UserInfoInterface';

const Dashbord: NextPage = () => {
    const [userRole,setUserRole] = useState<userRole>("admin")

    if (userRole == 'admin'){
        return  <h1>Hello this is Admin Dashbord</h1>
    }
    if (userRole == 'seller'){
        return <h1>Hello This is Seller Dashbord</h1>
    }
    if (userRole == 'buyer'){
        return <h1>Hello This is Buyer Dasbord</h1>
    }
};

export default Dashbord;