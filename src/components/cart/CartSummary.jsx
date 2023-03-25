import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/cartContext";

export const CartSummary = () => {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);

  return (
    <div className="cart-summary">
      <div className="summary-order">
        <h4 className="summary-title">ORDER SUMMARY</h4>
        <div className="item-total">
          <span className="summary-name">Item total</span>
          <span className="summary-price">{`${total} ₼`}</span>
        </div>
        <div className="delivery">
          <span className="summary-name">Delivery</span>
          <span className="summary-price">Free</span>
        </div>
      </div>
      <div className="sub-total">
        <span className="summary-name">Subtotal</span>
        <span className="summary-price">{`${total} ₼`}</span>
      </div>
      <Link className="checkout">Continue to Checkout</Link>
      <Link className="back-shopping">Back to shopping</Link>
    </div>
  );
};
