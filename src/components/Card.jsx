// Icons
import { useContext } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
// Router
import { Link } from "react-router-dom";
import CartContext from "../Context/cartContext";
import HeartContext from "../Context/heartContext";

export const Card = ({
  product,
  onClick,
  addHeart,
  removeHeart,
  variant = "add",
}) => {
  const { heart } = useContext(HeartContext);
  const heartcheck = heart.some((item) => item.productId === product.productId);

  return (
    <div className="product">
      <span className="new">NEW</span>
      {(variant === "add" || !heartcheck) && (
        <span className="wish-push" onClick={addHeart}>
          <IoMdHeartEmpty className="wish-push-icon" />
        </span>
      )}
      {(variant === "remove" || heartcheck) && (
        <span className="wish-push red" onClick={removeHeart}>
          <IoMdHeart className="wish-push-icon" />
        </span>
      )}

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
        <Link to={`/products/${product.productId}`}>
          <h3 className="product-title">{product.productName}</h3>
        </Link>
        <span className="product-price">{product.price} &#x20BC;</span>
      </div>
    </div>
  );
};
