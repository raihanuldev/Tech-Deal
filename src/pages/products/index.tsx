import React, { useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { productInterface } from "@/interface/ProductInterface";
import Footer from "@/components/Footer";
import Pagination from "@/components/pagination/Pagination";

const ProductsPage: NextPage<{ products: productInterface }> = ({
  products,
}) => {
  const [btnDisable, setbtnDisable] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleNumberClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the index range for classes to display based on the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  return (
    <div className="md:px-10 bg-[#f9f6fd] h-screen">
      {/* simple Cart static */}
      <div className="grid md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-6">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(products.length / productsPerPage)}
          onPageChange={handlePageChange}
          onNumberClick={handleNumberClick}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;

export const getStaticProps = async () => {
  try {
    // const res = await fetch('https://tech-deal-backend-o5ta.vercel.app/products');
    const res = await fetch("http://localhost:5000/products");
    const data: productInterface[] = await res.json();
    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        products: [],
      },
    };
  }
};
