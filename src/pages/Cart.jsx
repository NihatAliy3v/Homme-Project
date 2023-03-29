import React, { useContext, useEffect } from "react";
import { VscChevronRight } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { CartProduct } from "../components/cart/CartProduct";
import { CartSummary } from "../components/cart/CartSummary";
import { HeadTitle } from "../components/HeadTitle";
import CartContext from "../Context/cartContext";

const Cart = () => {
  const { cart, removeCart, quantityUp, quantityDown } =
    useContext(CartContext);
  console.log(cart);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="cart">
      <section className="cart-main">
        <div className="container">
          <div className="row">
            <HeadTitle name="Shopping cart" title={true} />

            <section className="cart-wrapper">
              <section className="cart-list">
                {cart?.map((item, index) => (
                  <CartProduct
                    key={index}
                    product={item}
                    quantity={item.quantity}
                    quantityUp={() => quantityUp(item.productId)}
                    quantityDown={() => quantityDown(item.productId)}
                    onClick={() => removeCart(item.productId)}
                  />
                ))}
              </section>

              <section className="order-summary-container">
                <CartSummary />
              </section>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
