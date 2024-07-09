"use client"
import { FC, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRight } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import SliderData1 from '@/public/3e5283aa-8564-49cb-8e8a-978039a047ac-0-656x250crop.png';
import SliderData2 from '@/public/WC-RW-PnP-titulka-500x500crop.png';
import '@/app/components/animation.css';
import SliderComponent from './SliderComponent';

const Slider: FC = () => {
  const swiperRef = useRef<any>(null);

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.slides) {
      const slides = swiperRef.current.slides;
      slides.forEach((slide: any, index: number) => {
        const content = slide.querySelector('.slide-content');
        const button = slide.querySelector('.button-content');
        const image = slide.querySelector('.image-content');
        if (index === swiperRef.current.activeIndex) {
          content.classList.add('active');
          button.classList.add('active');
          image.classList.add('active');
        } else {
          content.classList.remove('active');
          button.classList.remove('active');
          image.classList.remove('active');
        }
      });
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on('slideChange', handleSlideChange);
      handleSlideChange(); 
    }
  }, []);

  return (
    <div className="relative w-full h-[400px] translate-y-16">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          handleSlideChange(); 
        }}
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-[40rem]"
      >
        <SwiperSlide>
          <div className='slide-content Slider1 h-[40rem] flex flex-col items-center justify-center'>
            <Image alt='slider' className='image-content' src={SliderData1} objectFit='cover' width={700} height={100} />
            <button className='button-content bg-[#e5007e] md:px-5 px-2 md:py-3 py-1 outline-none text-white flex gap-1 items-center justify-center md:text-[25px] text-[17px]'>
              Want to Know more <FaArrowRight />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide-content Slider2 h-[40rem] flex flex-col items-center justify-center'>
            <Image alt='slider' className='image-content' src={SliderData2} objectFit='cover' width={350} height={350} />
            <button className='button-content bg-[#e5007e] md:px-5 px-2 md:py-3 py-1 outline-none text-white flex gap-1 items-center justify-center md:text-[25px] text-[17px]'>
              Want to Know more <FaArrowRight />
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
      <SliderComponent />
    </div>
  );
};

export default Slider;
