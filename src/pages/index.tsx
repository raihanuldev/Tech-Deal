import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import CategoriesProducts from "@/components/Categories";
import OurCommit from "@/components/OurCommit";
import Ads from "@/components/ads/Ads";
import Footer from "@/components/Footer";
import TrandingProducts from "@/components/TrandingProducts/TrandingProducts";
import ReviewProducts from "@/components/review/ReviewProducts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="md:px-10">
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
