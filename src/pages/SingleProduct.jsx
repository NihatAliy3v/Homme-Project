import React from "react";

const SingleProduct = () => {
  return (
    <main className="single-product">
      <div className="container">
        <div className="row">
          <div className="title"></div>
          <div className="single-wrapper">
            <div className="product-images">
              <div className="main-img">
                <img src="" alt="" />
              </div>
              <div className="img-list">
                <img src="" alt="" />
              </div>
            </div>
            <div className="product-info">
              <h1 className="product-title">
                Jacquard hand towel from the "Damascus" collection
              </h1>
              <div className="product-code">Product code: 104678</div>
              <div className="size-container">
                <span className="size">Sizes</span>
                <div className="product-size">50x100 CM</div>
              </div>
              <div className="product-color">Color:Beige</div>
              <div className="product-material">Material: cotton,linen</div>
              <div className="product-price">44.99 ₼</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
