import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import CategoriesProducts from "@/components/Categories";
import OurCommit from "@/components/OurCommit";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="md:px-10">
      <Banner />
      <OurCommit/>
      <CategoriesProducts/>
    </div>
  );
}
