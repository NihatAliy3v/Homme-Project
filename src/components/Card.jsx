// Icons
import { useContext } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
// Router
import { Link } from "react-router-dom";
import CartContext from "../Context/cartContext";

export const Card = ({ product, onClick }) => {
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
        {product.imagesPath[1] && (
          <img
            src={`https://localhost:44317/${product.imagesPath[1].imagePath.replace(
              "wwwroot",
              ""
            )}`}
            alt=""
          />
        )}
      </Link>
      <div className="content">
        <Link to="/single-product">
          <h3 className="product-title">{product.productName}</h3>
        </Link>
        <span className="product-price">{product.price} &#x20BC;</span>
      </div>
    </div>
  );
};
