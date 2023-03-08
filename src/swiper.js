import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Swip({ children }) {
  return (
    <>
      <Swiper
        slidesPerGroup={1}
        spaceBetween={40}
        loop={true}
        modules={[Pagination, Navigation]}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400:{
            slidesPerView: 2,
          },
          512: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </>
  );
}
