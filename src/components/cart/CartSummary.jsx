import React from "react";
import { Link } from "react-router-dom";

export const CartSummary = () => {
  return (
    <div className="cart-summary">
      <div className="summary-order">
        <h4 className="summary-title">ORDER SUMMARY</h4>
        <div className="item-total">
          <span className="summary-name">Item total</span>
          <span className="summary-price">259.98 ₼</span>
        </div>
        <div className="delivery">
          <span className="summary-name">Delivery</span>
          <span className="summary-price">Free</span>
        </div>
      </div>
      <div className="sub-total">
        <span className="summary-name">Subtotal</span>
        <span className="summary-price">259.98 ₼</span>
      </div>
      <Link className="checkout">Continue to Checkout</Link>
      <Link className="back-shopping">Back to shopping</Link>
    </div>
  );
};
