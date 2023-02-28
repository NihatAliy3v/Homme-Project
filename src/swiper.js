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
        slidesPerView={5}
        slidesPerGroup={5}
        spaceBetween={40}
        loop={true}
        modules={[Pagination, Navigation]}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </>
  );
}
