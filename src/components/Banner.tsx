
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { NextPage } from 'next';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import '../styles/globals.css';

// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

const Banner: NextPage = () => {
  return (
    <div className=' my-2 h-[85vh]'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <Image src='https://www.ryans.com/storage/sliders/Acer-aspire-5-gamingbanner_1713586180.webp' className='rounded-lg ' alt='Banner1' width={80} height={30} unoptimized/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src='https://www.startech.com.bd/image/cache/catalog/home/banner/xpert-watch-home-banner-3-982x500.webp' className='rounded-lg' alt='Banner1' width={80} height={30} unoptimized/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src='https://www.startech.com.bd/image/cache/catalog/home/banner/april-ac-deal-home-banner-982x500.webp' className='rounded-lg' alt='Banner1' width={80} height={30} unoptimized/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;