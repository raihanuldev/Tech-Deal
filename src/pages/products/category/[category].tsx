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

  return (
    <div className="md:px-10 bg-[#f9f6fd] h-screen">
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
