// Router
import { Link } from "react-router-dom";

// Icons
import { MdArrowRight } from "react-icons/md";

export const ShopNow = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="shop-wrapper">
          <h2 className="shop-title">
            New collection of wine glasses and decanters !
          </h2>
          <p className="description">
            Bring sophistication to your table setting with our products!
          </p>
          <Link className="shop-link">
            SHOP NOW <MdArrowRight className="shop-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};
