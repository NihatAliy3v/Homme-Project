// Icons
import { IoMdHeartEmpty } from "react-icons/io";
// Router
import { Link } from "react-router-dom";

export const Card = ({ product }) => {
  return (
    <div className="product">
      <span className="new">NEW</span>
      <span className="wish-push">
        <IoMdHeartEmpty className="wish-push-icon" />
      </span>
      <Link to={`/products/${product.productId}`} className="img">
        <img
          src={`https://localhost:44317/${product.imagesPath[0].imagePath.replace(
            "wwwroot",
            ""
          )}`}
          alt=""
        />
      </Link>
      <div className="content">
        <Link to="/single-product">
          <h3 className="product-title">{product.productName}</h3>
        </Link>
        <span className="product-price">79.99 &#x20BC;</span>
      </div>
    </div>
  );
};
