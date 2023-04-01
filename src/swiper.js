import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Controller } from "swiper";

export default function Swip({ children, control, navigationClassName }) {
  return (
    <>
      <Swiper
        slidesPerGroup={1}
        spaceBetween={40}
        loop={true}
        modules={[Pagination, Navigation, Controller]}
        navigation={{
          prevEl:  `.prev.${navigationClassName}`,
          nextEl:  `.next.${navigationClassName}`,
        }}
        
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
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
