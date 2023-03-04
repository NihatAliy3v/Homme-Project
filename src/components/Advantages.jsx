// Router
import { Link } from "react-router-dom";
// Icons
import { BsCreditCard2Front } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";

export const Advantages = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="advantages-wrapper">  
          <Link className="advantage">
            <div className="advantage-icon">
              <BsCreditCard2Front className="icon" />
            </div>
            <p className="advantage-description">Easy and safe payment</p>
          </Link>
          <Link className="advantage center">
            <div className="advantage-icon">
              <TbTruckDelivery className="icon" />
            </div>
            <p className="advantage-description">Express one-day delivery</p>
          </Link>
          <Link className="advantage">
            <div className="advantage-icon">
              <BsBoxSeam className="icon" />
            </div>
            <p className="advantage-description">Returns and exchanges</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
