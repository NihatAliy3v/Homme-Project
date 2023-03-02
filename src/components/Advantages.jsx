// Router
import { Link } from "react-router-dom";
// Icons
import { CiCreditCard2 } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";

export const Advantages = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="advantages-wrapper">
          <Link className="advantage">
            <div className="advantage-icon">
              <CiCreditCard2 className="icon" />
            </div>
            <p className="advantage-description">Easy and safe payment</p>
          </Link>
          <Link className="advantage center">
            <div className="advantage-icon">
              <CiDeliveryTruck className="icon" />
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
