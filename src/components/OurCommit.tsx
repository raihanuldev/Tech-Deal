import React from "react";
import { NextPage } from "next";
import Image from "next/image";

const OurCommit: NextPage = () => {
  return (
    <section className="flex w-[80%] justify-center pl-5 mx-auto mt-20 gap-5 divide-x">
      <div className="flex flex-col justify-center items-center text-center space-y-2">
        <Image
          src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-1.png"
          alt="Shiping"
          width={50}
          height={100}
          unoptimized
        />
        <h4 className="font-bold">10% off shipping</h4>
        <p className="text-slate-600 text-sm">
          10% on every shipping over the country
        </p>
      </div>

      <div className="flex flex-col justify-center items-center text-center space-y-2 pl-5">
        <Image
          src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-2.png"
          alt="Shiping"
          width={50}
          height={100}
          unoptimized
        />

        <h4 className="font-bold">Support 24/7</h4>
        <p className="text-slate-600 text-sm">
          10% on every shipping over the country
        </p>
      </div>

      <div className="flex flex-col justify-center items-center text-center space-y-2 pl-5">
        <Image
          src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-3.png"
          alt="Shiping"
          width={50}
          height={100}
          unoptimized
        />
        <h4 className="font-bold">Money Return</h4>
        <p className="text-slate-600 text-sm">
          10% on every shipping over the country
        </p>
      </div>
    </section>
  );
};

export default OurCommit;
