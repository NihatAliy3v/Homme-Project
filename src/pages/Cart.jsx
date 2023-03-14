import React from "react";
import { VscChevronRight } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { CartProduct } from "../components/CartProduct";

const Cart = () => {
  return (
    <main className="cart">
      <section className="cart-main">
        <div className="container">
          <div className="row">
            <div className="head-title">
              <div className="breadcrumb">
                <Link to="/" className="prevent-link">
                  Homme
                </Link>
                <VscChevronRight className="arright-icon" />
                <span className="lastest">Shopping cart</span>
              </div>
              <h1 className="title">Shopping cart</h1>
            </div>
            <section className="cart-wrapper">
              <section className="cart-list">
                <CartProduct />
              </section>

              <section className="order-summary-container"></section>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
