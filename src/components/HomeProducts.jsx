// Router
import { Link } from "react-router-dom";
// Swiper
import Swip from "../swiper";
import { SwiperSlide } from "swiper/react";
// Icons
import { HiArrowLongRight } from "react-icons/hi2";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
// Components
import { Card } from "./Card";

export const HomeProducts = ({ data, title, viewAll }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="products-header">
          <h2 className="title">{title}</h2>
          <Link to={viewAll} className="view-all">
            View all
            <HiArrowLongRight className="arrow-view" />
          </Link>
        </div>

        <div className="products">
          <Swip>
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <Card product={item} />
              </SwiperSlide>
            ))}
          </Swip>
          <button className="prev">
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button className="next">
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
