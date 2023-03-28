// Components
import { Card } from "../components/Card";
// Icons
import { TbSearch } from "react-icons/tb";
import { VscChevronRight } from "react-icons/vsc";
import { BiChevronDown } from "react-icons/bi";
// Router
import { Link } from "react-router-dom";
// Images
import { useContext, useEffect, useState } from "react";
import axios from "axios";
// Utils
import CartContext from "../Context/cartContext";
import { Loading } from "../components/Loading";

const NewIn = () => {
  const { addCart, data, setData } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  // Product
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    await axios
      .get("https://localhost:44317/api/Products/getAll")
      .then((res) => setData(res.data.data))
      .then(() => setLoading(true));
  };

  const handleClick = (e) => {
    const item = e.target;
    item.classList.toggle("active");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!loading) {
    return <Loading />;
  } else {
    return (
      <main className="new-in">
        <div className="head-title">
          <div className="breadcrumb">
            <Link to="/" className="prevent-link">
              Homme
            </Link>
            <VscChevronRight className="arright-icon" />
            <span className="lastest">New In</span>
          </div>
          <h1 className="title">New In</h1>
        </div>
        <section className="main-wrapper">
          <div className="container">
            <div className="row">
              <section className="product-list-side">
                <ul className="filter-list">
                  <li className="filter-item">
                    <div
                      className="filter-content"
                      onClick={(e) => handleClick(e)}
                    >
                      <span className="filter-title">Categories</span>
                      <div className="icon-container">
                        <BiChevronDown className="icon" />
                      </div>
                    </div>
                    <ul className="catalog-list">
                      <li className="catalog-item">
                        <div className="catalog-content">
                          <input type="checkbox" />
                          <span className="catalog-title">Home decor</span>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="filter-item">
                    <div
                      className="filter-content"
                      onClick={(e) => handleClick(e)}
                    >
                      <span className="filter-title">Collections</span>
                      <div className="icon-container">
                        <BiChevronDown className="icon" />
                      </div>
                    </div>
                    <ul className="catalog-list">
                      <li className="catalog-item">
                        <div className="catalog-content">
                          <input type="checkbox" />
                          <span className="catalog-title">Home decor</span>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="filter-item">
                    <div
                      className="filter-content"
                      onClick={(e) => handleClick(e)}
                    >
                      <span className="filter-title">Colors</span>
                      <div className="icon-container">
                        <BiChevronDown className="icon" />
                      </div>
                    </div>
                    <ul className="catalog-list">
                      <li className="catalog-item">
                        <div className="catalog-content">
                          <span
                            className="product-color"
                            style={{ backgroundColor: "red" }}
                          ></span>
                          <span className="catalog-title">Red</span>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="filter-item">
                    <div
                      className="filter-content"
                      onClick={(e) => handleClick(e)}
                    >
                      <span className="filter-title">Materials</span>
                      <div className="icon-container">
                        <BiChevronDown className="icon" />
                      </div>
                    </div>
                    <ul className="catalog-list">
                      <li className="catalog-item">
                        <div className="catalog-content">
                          <input type="checkbox" />
                          <span className="catalog-title">Home decor</span>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="filter-item">
                    <div className="filter-content active">
                      <span className="filter-title">Price</span>
                      <div className="icon-container">
                        <BiChevronDown className="icon" />
                      </div>
                    </div>
                    <ul className="catalog-list">
                      <li className="catalog-item">
                        <div className="catalog-content">
                          <input
                            type="number"
                            name="minPrice"
                            id="minPrice"
                            placeholder="4"
                          />
                          <span className="dash">-</span>
                          <input
                            type="number"
                            name="maxPrice"
                            id="maxPrice"
                            placeholder="750"
                          />
                          <button className="btn">
                            <TbSearch className="search-icon" />
                          </button>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </section>
              <section className="product-list-main">
                <div className="product-list-header">
                  <span className="products-counter">
                    {data.length} products{" "}
                  </span>
                </div>
                <div className="product-list">
                  {data?.map((item, index) => (
                    <div key={index} className="card">
                      <Card
                        product={item}
                        onClick={() => addCart(item.productId)}
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    );
  }
};

export default NewIn;
