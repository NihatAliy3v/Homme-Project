import { useState } from "react";
// Images
import productImage from "../../assets/images/product-img.jpg";
// Icons
import { IoTrashOutline } from "react-icons/io5";

export const CartProduct = ({
  product,
  quantity,
  onClick,
  quantityUp,
  quantityDown,
}) => {
  return (
    <div className="cart-product">
      <div className="product-images">
        <img
          src={`https://localhost:44317/${product.imagesPath[0].imagePath.replace(
            "wwwroot",
            ""
          )}`}
          alt=""
        />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.productName}</h3>
        <div className="product-price">
          {product.price}
          <span> ₼</span>
        </div>
        <div className="product-amount">
          <div className="product-size">
            <span>Size:</span> {product.size}
          </div>
          <div className="product-quantity">
            <span>Quantity:</span>
            <div className="quantity">
              {quantity === 1 ? (
                <button className="btn disabled" disabled>
                  -
                </button>
              ) : (
                <button className="btn" onClick={quantityDown}>
                  -
                </button>
              )}

              <input
                type="number"
                value={quantity}
                onChange={(event) => parseInt(event.target.value)}
                readOnly
              />
              <button className="btn" onClick={quantityUp}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="delete-cart" onClick={onClick}>
        <IoTrashOutline className="delete-icon" />
      </button>
    </div>
  );
};
