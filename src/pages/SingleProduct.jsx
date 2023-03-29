// Icons
import { IoMdHeartEmpty } from "react-icons/io";

// React
import { useContext, useEffect, useState } from "react";
import axios from "axios";
// Utils
import CartContext from "../Context/cartContext";
import { useParams } from "react-router-dom";
import HeartContext from "../Context/heartContext";

// Components
import { Loading } from "../components/Loading";
import { HeadTitle } from "../components/HeadTitle";

const SingleProduct = () => {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const { addCart } = useContext(CartContext);
  const { removeHeart, addHeart } = useContext(HeartContext);
  const [data, setData] = useState();
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
      .then((res) => setData(res.data.data))
      .then(() => setLoading(true));
  };

  if (!loading) {
    return <Loading />;
  } else {
    return (
      <main className="single-product">
        <div className="container">
          <div className="row">
            <HeadTitle name={data?.productName} title={false} />
            <div className="single-wrapper">
              <div className="product-images">
                <div className="main-img">
                  <img
                    src={`https://localhost:44317/${data?.imagesPath[0].imagePath.replace(
                      "wwwroot",
                      ""
                    )}`}
                    alt=""
                  />
                </div>
                <div className="img-list">
                  {data?.imagesPath.map((item, index) => (
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
                <h1 className="product-title">{data?.productName}</h1>
                <div className="product-code">
                  Product code: {data?.productCode}
                </div>
                <div className="size-container">
                  <span className="size">Sizes</span>
                  <span className="product-size">{data?.size}</span>
                </div>
                <div className="product-color">
                  Color:<span>{data?.colorName}</span>
                </div>
                <div className="product-material">
                  Material: <span>{data?.materialName}</span>
                </div>
                <div className="product-price">
                  {data?.price} <span>₼</span>
                </div>
                <div className="product-actions">
                  <div className="quantity">
                    {count === 1 ? (
                      <button className="btn disabled" disabled>
                        -
                      </button>
                    ) : (
                      <button
                        className="btn"
                        onClick={() => setCount(count - 1)}
                      >
                        -
                      </button>
                    )}

                    <input
                      type="number"
                      value={count}
                      onChange={(event) =>
                        setCount(parseInt(event.target.value))
                      }
                    />
                    <button className="btn" onClick={() => setCount(count + 1)}>
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => addCart(data.productId, count)}
                    className="cart-btn"
                  >
                    Add to Cart
                  </button>
                  <div
                    className="wish-list"
                    onClick={() => addHeart(data.productId)}
                  >
                    <IoMdHeartEmpty className="wish-icon" />
                    <span>Add to Wish list</span>
                  </div>
                  <div
                    className="wish-list"
                    onClick={() => removeHeart(data.productId)}
                  >
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
  }
};

export default SingleProduct;
