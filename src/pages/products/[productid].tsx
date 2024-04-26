import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Product: NextPage = () => {
  const router = useRouter();
  const {productid} = router.query;
  console.log(router);
  return (
    <div>
      <p>this is {productid}</p>
    </div>
  );
};

export default Product;

// export const getStaticProps =async()=>{
//   try {
    
//   const res = await fetch(`http://localhost:5000/products/${productid}`)
//   } catch (error) {
//     console.log(error)
//   }
// }