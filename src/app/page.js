'use client'

import Image from "next/image";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css/bundle';

export default function Home() {
  return (
    <div>
      <div className="relative">
        <img className="w-full md:h-full h-screen object-cover brightness-50" src="./asset/FrontPage/JajanPasar.png" />
        <div className="absolute text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="lg:text-9xl md:text-6xl text-5xl font-bold mb-5">Warung Hati</h1>
          <h2 className="text-2xl text-wrap">The Authentic Indonesia’s Heritage Cuisine with Organic and Natural Ingredients</h2>
        </div>
      </div>
      <div className="flex justify-evenly gap-x-6 px-20 content-center my-20 md:flex-row flex-col">
        <div className="flex-1">
          <div className="flex flex-row gap-x-10 h-[50rem] rounded">
            <div className="flex-1">
              <Image className="w-full h-full object-cover " src={'/asset/FrontPage/BuburMadura.png'} width={400} height={100}></Image>
            </div>
            <div className="flex-1 ">
              <img className="w-full h-full object-cover" src="./asset/Frontpage/EsKuwutBali.png"></img>
            </div>
          </div>
        </div>
        <div className="flex-1 self-center">
          <header>
            <h1 className="text-[5rem] leading-none font-bold mb-3">Welcome to your life-changing journey</h1>
          </header>
          <p className="">Experience the authentic taste of Indonesia's cultural heritage
            with
            Warung Hati's
            cuisine. Our menu is crafted with indigenous herbs, spices, and natural ingredients that have been passed
            down from our ancestors. We believe that this wisdom is the key to achieving the balance between humans and
            nature, and is also the secret to prime health and longevity.</p>
        </div>
      </div>
      <div>
      </div>
      {/* <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full md:h-full h-screen object-cover brightness-50" src="/asset/FrontPage/EsKuwutBali.png"/>
            <div className="absolute text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="lg:text-9xl md:text-6xl text-5xl font-bold mb-5">Warung Hati</h1>
              <h2 className="text-2xl text-wrap">The Authentic Indonesia’s Heritage Cuisine with Organic and Natural Ingredients</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full md:h-full h-screen object-cover brightness-50" src="/asset/FrontPage/EsKuwutBali.png"/>
            <div className="absolute text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="lg:text-9xl md:text-6xl text-5xl font-bold mb-5">Warung Hati</h1>
              <h2 className="text-2xl text-wrap">The Authentic Indonesia’s Heritage Cuisine with Organic and Natural Ingredients</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
}
