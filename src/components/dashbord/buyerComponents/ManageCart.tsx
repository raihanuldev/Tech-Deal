import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCart';
import Product from '@/pages/products/[productid]';
import ProductCart from './ProductCart';

const ManageCart = () => {
    const cartItems = useSelector((state:RootState)=>state.cart.items)
    console.log(cartItems);
    return (
        <div>
            this is Manage carts {cartItems.length} 
            <div className='grid md:grid-cols-3'>
                <ProductCart/>
            </div>
        </div>
    );
};

export default ManageCart;