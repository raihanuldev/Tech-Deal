import { GetStaticProps, NextPage } from "next";
import { Key, useEffect, useState } from "react";
import { productInterface } from "@/interface/ProductInterface";
import ProductCard from "../ProductCard";

const TrandingProducts: NextPage<{ products: productInterface }> = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold my-4">Our Tranding Products</h1>
      <div className="grid md:grid-cols-4 space-y-2">
        {
            products.map((product,index) => <ProductCard key={index} product={product}/>).splice(4,8)
        }
      </div>
    </>
  );
};
export default TrandingProducts;

// export const getStaticProps:GetStaticProps = async () => {
//     try {
//       // const res = await fetch('https://tech-deal-backend-o5ta.vercel.app/products');
//       const res = await fetch('http://localhost:5000/products');
//       const data: productInterface[] = await res.json();
//       console.log(data);
//       return {
//         props: {
//           products: data
//         }
//       };
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       return {
//         props: {
//           products: []
//         }
//       };
//     }
//   };
