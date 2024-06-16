import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import CategoriesProducts from "@/components/Categories";
import OurCommit from "@/components/OurCommit";
import Ads from "@/components/ads/Ads";
import Footer from "@/components/Footer";
import TrandingProducts from "@/components/TrandingProducts/TrandingProducts";
import ReviewProducts from "@/components/review/ReviewProducts";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="md:px-10">
       <Head>
        <title>Home | Tech Deal</title>
        <meta name="description" content="Welcome to our home page. Discover our products and services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Banner />
      <CategoriesProducts />
      <TrandingProducts />
      {/* <ReviewProducts/> */}
      <OurCommit />

      <Image
        className="mx-auto my-4"
        height={1000}
        width={2000}
        unoptimized
        src="https://securepay.sslcommerz.com/public/image/SSLCommerz-Pay-With-logo-All-Size-03.png"
        alt="payment"
      />
      
      <Footer />
    </div>
  );
}
