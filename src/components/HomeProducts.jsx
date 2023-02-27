import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import Swip from "../swiper";
import { SwiperSlide } from "swiper/react";
export const HomeProducts = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="products-header">
          <h2 className="title">New Products</h2>
          <Link className="view-all">
            View all
            <HiArrowLongRight className="arrow-view" />
          </Link>
        </div>

        <div className="products">
          <Swip>
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.image} alt="" />
              </SwiperSlide>
            ))}
          </Swip>
          <div className="product"></div>
        </div>
      </div>
    </div>
  );
};
