"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

type StackItem = {
  name: string;
  image: string;
};

export function TechStackCarousel({ items }: { items: StackItem[] }) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="glass-panel mt-10 overflow-hidden p-4 sm:p-5">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={3500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={2}
        spaceBetween={12}
        allowTouchMove={false}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 12,
          },
        }}
        className="tech-stack-swiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item.name} className="h-auto">
            <div className="flex min-h-37.5 items-center justify-center rounded-[24px] border border-white/8 bg-white/6 p-6 transition-all duration-300 hover:border-primary/40 hover:bg-primary/12 hover:shadow-[0_12px_35px_rgba(255,187,81,0.14)] sm:min-h-42.5 md:min-h-46.25">
              <Image
                src={item.image}
                alt={item.name}
                width={150}
                height={150}
                className="h-20 w-auto max-w-32.5 object-contain transition duration-300 sm:h-24 sm:max-w-37.5 md:h-28 md:max-w-42.5"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}