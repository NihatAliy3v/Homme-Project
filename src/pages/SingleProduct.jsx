// Icons
import { VscChevronRight } from "react-icons/vsc";
import { IoMdHeartEmpty } from "react-icons/io";
// Images
import productImage from "../assets/images/product-img.jpg";
// Router
import { Link } from "react-router-dom";
// React
import { useState } from "react";

const SingleProduct = () => {
  const [count, setCount] = useState(0);

  return (
    <main className="single-product">
      <div className="container">
        <div className="row">
          <div className="head-title">
            <div className="breadcrumb">
              <Link className="prevent-link">Homme</Link>
              <VscChevronRight className="arright-icon" />
              <span className="lastest">Cast iron teapot (900 ml)</span>
            </div>
          </div>
          <div className="single-wrapper">
            <div className="product-images">
              <div className="main-img">
                <img src={productImage} alt="" />
              </div>
              <div className="img-list">
                <div className="img">
                  <img src={productImage} alt="" />
                </div>
                <div className="img">
                  <img src={productImage} alt="" />
                </div>
              </div>
            </div>
            <div className="product-info">
              <h1 className="product-title">Cast iron teapot (900 ml)</h1>
              <div className="product-code">Product code: 104678</div>
              <div className="size-container">
                <span className="size">Sizes</span>
                <span className="product-size">900 ML</span>
              </div>
              <div className="product-color">
                Color:<span>Black</span>
              </div>
              <div className="product-material">
                Material: <span>cotton,linen</span>
              </div>
              <div className="product-price">
                129.99 <span>₼</span>
              </div>
              <div className="product-actions">
                <div className="quantity">
                  {count === 0 ? (
                    <button className="btn disabled" disabled>
                      -
                    </button>
                  ) : (
                    <button className="btn" onClick={() => setCount(count - 1)}>
                      -
                    </button>
                  )}

                  <input type="number" value={count} />
                  <button className="btn" onClick={() => setCount(count + 1)}>
                    +
                  </button>
                </div>
                <button className="cart-btn">Add to cart</button>
                <div className="wish-list">
                  <IoMdHeartEmpty className="wish-icon" />
                  <span>Add to Wish list</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
