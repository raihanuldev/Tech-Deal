import React, { useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { productInterface } from "@/interface/ProductInterface";
import Footer from "@/components/Footer";
import Pagination from "@/components/pagination/Pagination";
import { FaSearch } from "react-icons/fa";

const ProductsPage: NextPage<{ products: productInterface[] }> = ({
  products,
}) => {
  const [btnDisable, setbtnDisable] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const [searchField, setSearchField] = useState("");
  const [searchData, setSearchData] = useState<productInterface[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    // Fetch data based on the search field value
    setIsSearching(true);
    fetch(`http://localhost:5000/Search-products?query=${searchField}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchData(data);
        setIsSearching(false);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setIsSearching(false);
      });
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleNumberClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the index range for products to display based on the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const currentProducts = searchData.length > 0 ? searchData : products;
  const displayedProducts = currentProducts.slice(startIndex, endIndex);

  return (
    <div className="md:px-10 bg-[#f9f6fd] h-screen">
      <div className="flex w-2/3 mx-auto">
        <input
          type="text"
          onChange={(e) => setSearchField(e.target.value)}
          className="input my-4 w-full bg-[#bfcdda] "
          placeholder="Search Product"
        />
        <button onClick={handleSearch} className="btn btn-outline ml-2 mt-4">
          <FaSearch />
        </button>
      </div>
      {/* Products grid */}
      <div className="grid md:grid-cols-3">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-6">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(currentProducts.length / productsPerPage)}
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
