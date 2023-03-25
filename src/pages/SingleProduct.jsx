// Icons
import { VscChevronRight } from "react-icons/vsc";
import { IoMdHeartEmpty } from "react-icons/io";
// Images
import productImage from "../assets/images/product-img.jpg";
// Router
import { Link, useParams } from "react-router-dom";
// React
import { useContext, useEffect, useState } from "react";
import axios from "axios";
// Utils
import CartContext from "../Context/cartContext";

const SingleProduct = () => {
  const [count, setCount] = useState(1);
  const [singleData, setSingleData] = useState();
  const { addCart } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  // Product
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    await axios
      .get(`https://localhost:44317/api/Products/byId/${id}`)
      .then((res) => setSingleData(res.data.data));
  };

  return (
    <main className="single-product">
      <div className="container">
        <div className="row">
          <div className="head-title">
            <div className="breadcrumb">
              <Link to="/" className="prevent-link">
                Homme
              </Link>
              <VscChevronRight className="arright-icon" />
              <span className="lastest">{singleData?.productName}</span>
            </div>
          </div>
          <div className="single-wrapper">
            <div className="product-images">
              <div className="main-img">
                <img
                  src={`https://localhost:44317/${singleData?.imagesPath[0].imagePath.replace(
                    "wwwroot",
                    ""
                  )}`}
                  alt=""
                />
              </div>
              <div className="img-list">
                {singleData?.imagesPath.map((item, index) => (
                  <div className="img" key={index}>
                    <img
                      src={`https://localhost:44317/${item.imagePath.replace(
                        "wwwroot",
                        ""
                      )}`}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="product-info">
              <h1 className="product-title">{singleData?.productName}</h1>
              <div className="product-code">
                Product code: {singleData?.productCode}
              </div>
              <div className="size-container">
                <span className="size">Sizes</span>
                <span className="product-size">{singleData?.size}</span>
              </div>
              <div className="product-color">
                Color:<span>{singleData?.colorName}</span>
              </div>
              <div className="product-material">
                Material: <span>{singleData?.materialName}</span>
              </div>
              <div className="product-price">
                {singleData?.price} <span>₼</span>
              </div>
              <div className="product-actions">
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
                <button
                  onClick={() => addCart(singleData.productId, count)}
                  className="cart-btn"
                >
                  Add to Cart
                </button>
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
