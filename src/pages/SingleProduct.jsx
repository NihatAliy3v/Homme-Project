// React
import { useContext, useEffect, useState } from "react";
// Icons
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
// Context
import CartContext from "../Context/cartContext";
import HeartContext from "../Context/heartContext";
// Components
import { Loading } from "../components/Loading";
import { HeadTitle } from "../components/HeadTitle";
// Axios
import axios from "axios";
// Params
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const { addCart, setCartData } = useContext(CartContext);
  const { removeHeart, addHeart } = useContext(HeartContext);
  const { setHeartData, heart } = useContext(HeartContext);

  const [data, setData] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  // Product
  useEffect(() => {
    getProduct();
    getProducts();
  }, []);
  const getProduct = async () => {
    await axios
      .get(`https://localhost:44317/api/Products/byId/${id}`)
      .then((res) => setData(res.data.data))
      .then(() => setLoading(true));
  };
  const getProducts = async () => {
    try {
      const response = await axios.get(
        "https://localhost:44317/api/Products/getAll"
      );
      setCartData(response.data.data);
      setHeartData(response.data.data);
      setLoading(true);
    } catch (error) {
      console.error(error);
    }
  };
  const heartcheck = heart.some((item) => item.productId === Number(id));
  const [photoIndex, setPhotoIndex] = useState(0);
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
                    src={`https://localhost:44317/${data?.imagesPath[
                      photoIndex
                    ].imagePath.replace("wwwroot", "")}`}
                    alt=""
                  />
                </div>
                <div className="img-list">
                  {data?.imagesPath.map((item, index) => (
                    <div
                      className="img"
                      key={index}
                      onClick={() => setPhotoIndex(index)}
                    >
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

                  {!heartcheck && (
                    <div
                      className="wish-list"
                      onClick={() => addHeart(data.productId)}
                    >
                      <IoMdHeartEmpty className="wish-icon" />
                      <span>Add to Wish list</span>
                    </div>
                  )}
                  {heartcheck && (
                    <div
                      className="wish-list"
                      onClick={() => removeHeart(data.productId)}
                    >
                      <IoMdHeart className="wish-icon" />
                      <span>Remove from Wish list</span>
                    </div>
                  )}
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
