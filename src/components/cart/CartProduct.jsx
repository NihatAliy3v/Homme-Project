import { useState } from "react";
// Images
import productImage from "../../assets/images/product-img.jpg";
// Icons
import { IoTrashOutline } from "react-icons/io5";


export const CartProduct = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="cart-product">
      <div className="product-images">
        <img src={productImage} alt="" />
      </div>
      <div className="product-info">
        <h3 className="product-title">Cast iron teapot (900 ml)</h3>
        <div className="product-price">
          129.99<span> ₼</span>
        </div>
        <div className="product-amount">
          <div className="product-size">
            <span>Size:</span> 900 ML
          </div>
          <div className="product-quantity">
            <span>Quantity:</span>
            <div className="quantity">
              {count === 1 ? (
                <button className="btn disabled" disabled>
                  -
                </button>
              ) : (
                <button className="btn" onClick={() => setCount(count - 1)}>
                  -
                </button>
              )}

              <input
                type="number"
                value={count}
                onChange={(event) => setCount(parseInt(event.target.value))}
              />
              <button className="btn" onClick={() => setCount(count + 1)}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="delete-cart">
        <IoTrashOutline className="delete-icon"/>
      </button>
    </div>
  );
};
