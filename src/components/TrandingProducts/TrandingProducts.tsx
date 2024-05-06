import { GetStaticProps, NextPage } from "next";
import { Key, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/core";
import { productInterface } from "@/interface/ProductInterface";
import ProductCard from "../ProductCard";

SwiperCore.use([Navigation, Pagination]);
const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };
  
const TrandingProducts:NextPage<{products:productInterface}> = ({products}) => {
console.log(products);
  return(
  <><h1 className="text-3xl font-bold my-4">Our Tranding Products</h1><div className="">
          <Swiper
              loop={true}
              slidesPerView={3}
              autoplay={true}
              modules={[Pagination, Autoplay]}
              breakpoints={breakpoints}
              className="flex flex-row mt-10 md:pt-5"
          >
              {products.map((product:productInterface) => (
                  <SwiperSlide key={product._id} className="md:p-5">
                      <ProductCard product={product} key={product._id} />
                  </SwiperSlide>
              ))}
          </Swiper>
      </div></>
)};
export default TrandingProducts;


export const getStaticProps:GetStaticProps = async () => {
    try {
      // const res = await fetch('https://tech-deal-backend-o5ta.vercel.app/products');
      const res = await fetch('http://localhost:5000/products');
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
  