import auth from '@/firebase/firebase.auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const OrderHistorySellerDashbord = () => {
    const [user] = useAuthState(auth);
    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        fetch(`https://tech-deal-backend-o5ta.vercel.app/orders/${user?.email}`).then(res=>res.json()).then(data=>setOrders(data))
    },[user])
    return (
        <div>
            this is for this account how much product sold! {orders.length}
        </div>
    );
};

export default OrderHistorySellerDashbord;