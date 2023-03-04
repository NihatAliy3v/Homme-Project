import React from "react";
import { Link } from "react-router-dom";
import { VscChevronRight } from "react-icons/vsc";
import { BiChevronDown } from "react-icons/bi";
import heroBanner from "../assets/images/hero-banner.jpg";
import { Card } from "../components/Card";

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
  return (
    <main className="new-in">
      <section className="wrapper">
        <div className="container">
          <div className="row">
            <div className="head-title">
              <div className="breadcrumb">
                <Link className="prevent-link">Homme</Link>
                <VscChevronRight className="arright-icon" />
                <span className="lastest">New In</span>
              </div>
              <h1 className="title">New In</h1>
            </div>
            <section className="main-wrapper">
              <section className="product-list-side">
                <ul className="catalog-list">
                  <li className="catalog-item">
                    <div className="item-content">
                      <span className="title">Categories</span>
                      <div className="icon-container">
                        <BiChevronDown className="icon" />
                      </div>
                    </div>
                    <ul>
                      <li>asfafs</li>
                    </ul>
                  </li>
                  <li className="catalog-item">
                    <div className="item-content">
                      <span className="title">Categories</span>
                      <div className="icon-container">
                        <BiChevronDown className="icon" />
                      </div>
                    </div>
                  </li>
                  <li className="catalog-item">
                    <div className="item-content">
                      <span className="title">Categories</span>
                      <div className="icon-container">
                        <BiChevronDown className="icon" />
                      </div>
                    </div>
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
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewIn;
