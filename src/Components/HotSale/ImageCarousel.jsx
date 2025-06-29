import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const carouselItems = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/big-sale-discounts-products_23-2150336669.jpg",
    alt: "Big sale discounts",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/premium-psd/smart-phone-sale-promotion-black-friday-sale-web-banner-template_179771-192.jpg",
    alt: "Smartphone sale banner",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-psd/black-friday-super-sale-web-banner-template_120329-2158.jpg",
    alt: "Black Friday sale banner",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/premium-psd/gaming-laptop-sale-promotion-banner_252779-743.jpg",
    alt: "Gaming laptop sale",
  },
];

const ImageCarousel = () => {
  return (
    <div className="w-full md:w-[80%] lg:w-[45%] relative">
      <h4 className="font-medium text-slate-700 dark:text-slate-200 pb-3 text-sm ml-1">
        HOT SALE
      </h4>
      <div className="w-full h-60 bg-rose-300 rounded-xl overflow-hidden">
        <Swiper
          navigation
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          className="w-full h-full"
        >
          {carouselItems.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default React.memo(ImageCarousel);
