import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
  return (
    <div className="md:h-[80vh] h-[50vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !w-3 !h-3 !bg-gray-400 !opacity-50 !mx-1 !rounded-full !transition-all !duration-300',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-green-500 !opacity-100',
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        <SwiperSlide>
          <img className="w-full h-full" src="https://i.ibb.co.com/d0PztQ1y/out.jpg" alt="f" border="0" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full" src="https://i.ibb.co.com/4wQ83ZJP/apa.jpg" alt="d" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full" src="https://i.ibb.co.com/7xTwDsGW/dhaka.jpgs" alt="c" border="0" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full" src="https://i.ibb.co.com/5XbdWX8q/tv.jpg" alt="q" border="0" />
        </SwiperSlide>
        <div className="swiper-button-next !font-bold !text-fuchsia-500 hover:!text-green-600"></div>
        <div className="swiper-button-prev !font-bold !text-fuchsia-500 hover:!text-green-600"></div>
      </Swiper>
    </div>
  );
};

export default Banner;