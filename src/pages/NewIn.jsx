// Components
import { Card } from "../components/Card";
// Icons
import { TbSearch } from "react-icons/tb";
import { VscChevronRight } from "react-icons/vsc";
import { BiChevronDown } from "react-icons/bi";
// Router
import { Link } from "react-router-dom";
// Images
import heroBanner from "../assets/images/hero-banner.jpg";
import { useEffect } from "react";

const NewIn = () => {
  const data = [
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
  ];
  const handleClick = (e) => {
    const item = e.target;
    item.classList.toggle("active");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <ul className="catalog-list">
                <li className="catalog-item">
                  <div
                    className="catalog-content"
                    onClick={(e) => handleClick(e)}
                  >
                    <span className="catalog-title">Categories</span>
                    <div className="icon-container">
                      <BiChevronDown className="icon" />
                    </div>
                  </div>
                  <ul className="category-list">
                    <li className="category-item">
                      <div className="category-content">
                        <input type="checkbox" />
                        <span className="category-title">Home decor</span>
                      </div>
                    </li>
                    <li className="category-item">
                      <div className="category-content">
                        <input type="checkbox" />
                        <span className="category-title">Bathroom</span>
                      </div>
                    </li>
                    <li className="category-item">
                      <div className="category-content">
                        <input type="checkbox" />
                        <span className="category-title">Kitchen</span>
                      </div>
                    </li>
                    <li className="category-item">
                      <div className="category-content">
                        <input type="checkbox" />
                        <span className="category-title">Dining</span>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="catalog-item">
                  <div
                    className="catalog-content"
                    onClick={(e) => handleClick(e)}
                  >
                    <span className="catalog-title">Collections</span>
                    <div className="icon-container">
                      <BiChevronDown className="icon" />
                    </div>
                  </div>
                  <ul className="category-list">
                    <li className="category-item">
                      <div className="category-content">
                        <input type="checkbox" />
                        <span className="category-title">Home decor</span>
                      </div>
                    </li>
                    <li className="category-item">
                      <div className="category-content">
                        <input type="checkbox" />
                        <span className="category-title">Bathroom</span>
                      </div>
                    </li>
                    <li className="category-item">
                      <div className="category-content">
                        <input type="checkbox" />
                        <span className="category-title">Kitchen</span>
                      </div>
                    </li>
                    <li className="category-item">
                      <div className="category-content">
                        <input type="checkbox" />
                        <span className="category-title">Dining</span>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="catalog-item">
                  <div
                    className="catalog-content"
                    onClick={(e) => handleClick(e)}
                  >
                    <span className="catalog-title">Colors</span>
                    <div className="icon-container">
                      <BiChevronDown className="icon" />
                    </div>
                  </div>
                  <ul className="category-list">
                    <li className="category-item">
                      <div className="category-content">
                        <span
                          className="product-color"
                          style={{ backgroundColor: "red" }}
                        ></span>
                        <span className="category-title">Red</span>
                      </div>
                    </li>
                    <li className="category-item">
                      <div className="category-content">
                        <span
                          className="product-color"
                          style={{ backgroundColor: "black" }}
                        ></span>
                        <span className="category-title">Black</span>
                      </div>
                    </li>
                    <li className="category-item">
                      <div className="category-content">
                        <span
                          className="product-color"
                          style={{ backgroundColor: "green" }}
                        ></span>
                        <span className="category-title">Green</span>
                      </div>
                    </li>
                    <li className="category-item">
                      <div className="category-content">
                        <span
                          className="product-color"
                          style={{ backgroundColor: "blue" }}
                        ></span>
                        <span className="category-title">Blue</span>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="catalog-item">
                  <div
                    className="catalog-content"
                    onClick={(e) => handleClick(e)}
                  >
                    <span className="catalog-title">Materials</span>
                    <div className="icon-container">
                      <BiChevronDown className="icon" />
                    </div>
                  </div>
                  <ul className="category-list">
                    <li className="category-item">
                      <div className="category-content">
                        <input type="checkbox" />
                        <span className="category-title">Home decor</span>
                      </div>
                    </li>
                    <li className="category-item">
                      <div className="category-content">
                        <input type="checkbox" />
                        <span className="category-title">Bathroom</span>
                      </div>
                    </li>
                    <li className="category-item">
                      <div className="category-content">
                        <input type="checkbox" />
                        <span className="category-title">Kitchen</span>
                      </div>
                    </li>
                    <li className="category-item">
                      <div className="category-content">
                        <input type="checkbox" />
                        <span className="category-title">Dining</span>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="catalog-item">
                  <div className="catalog-content active">
                    <span className="catalog-title">Price</span>
                    <div className="icon-container">
                      <BiChevronDown className="icon" />
                    </div>
                  </div>
                  <ul className="category-list">
                    <li className="category-item">
                      <div className="category-content">
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
                <span className="products-counter">304 products </span>
              </div>
              <div className="product-list">
                {data.map((item, index) => (
                  <div key={index} className="card">
                    <Card product={item} />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewIn;
