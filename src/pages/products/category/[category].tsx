import React, { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { productInterface } from "@/interface/ProductInterface";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

interface ProductsPageProps {
  products: productInterface[];
}

const ProductsPage: NextPage<ProductsPageProps> = ({ products }) => {
  const router = useRouter();
  const { category } = router.query;

  const [filteredProducts, setFilteredProducts] = useState<productInterface[]>(products);
  useEffect(() => {
    if (category) {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [category, products]);

  if (filteredProducts.length ===0){
    return <p className="text-center text-3xl text-red-800 my-auto"> {category} Products Not Availble Right Now</p>
  }

  return (
    <div className="md:px-10 bg-[#f9f6fd] h-screen">
      
      <div className="grid md:grid-cols-3">
        {
          filteredProducts.map((product,index)=> <ProductCard product={product} key={index}/>)
        }
      
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;


//  getStaticPaths function
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://tech-deal-backend-o5ta.vercel.app/categories");
  const products = await res.json();
  const paths = products.map((category: { name: string }) => ({
    params: { category: category.name},
  }));
  return { paths, fallback: false };
};

export const getStaticProps:GetStaticProps = async () => {
  try {
    // const res = await fetch('https://tech-deal-backend-o5ta.vercel.app/products');
    const res = await fetch('https://tech-deal-backend-o5ta.vercel.app/products');
    const data: productInterface[] = await res.json();
    return {
      props: {
        products: data
      }
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: {
        products: [] 
      }
    };
  }
};