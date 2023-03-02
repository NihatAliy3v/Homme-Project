// Router
import { Link } from "react-router-dom";
// Swiper
import Swip from "../swiper";
import { SwiperSlide } from "swiper/react";
// Icons
import { HiArrowLongRight } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

export const HomeProducts = ({ data, title }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="products-header">
          <h2 className="title">{title}</h2>
          <Link className="view-all">
            View all
            <HiArrowLongRight className="arrow-view" />
          </Link>
        </div>

        <div className="products">
          <Swip>
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                {index === 2 ? (
                  <div className="product">
                    <span className="new">NEW</span>
                    <span className="wish-push">
                      <IoMdHeartEmpty className="wish-push-icon" />
                    </span>
                    <Link className="img">
                      <img src={item.image} alt="" />
                    </Link>
                    <div className="content">
                      <Link>
                        <h3 className="product-title">
                          Manual potato riser Manual potato riser Manual potato
                          riser Manual potato riser
                        </h3>
                      </Link>
                      <span className="product-price">79.99 &#x20BC;</span>
                    </div>
                  </div>
                ) : (
                  <div className="product">
                    <span className="new">NEW</span>
                    <span className="wish-push">
                      <IoMdHeartEmpty className="wish-push-icon" />
                    </span>
                    <Link className="img">
                      <img src={item.image} alt="" />
                    </Link>
                    <div className="content">
                      <Link>
                        <h3 className="product-title">Manual potato riser </h3>
                      </Link>
                      <span className="product-price">79.99 &#x20BC;</span>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swip>
          <btn className="prev">
            <MdOutlineKeyboardArrowLeft />
          </btn>
          <btn className="next">
            <MdOutlineKeyboardArrowRight />
          </btn>
        </div>
      </div>
    </div>
  );
};
