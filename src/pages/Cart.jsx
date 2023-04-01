// React
import { useContext, useEffect } from "react";
// Contexts
import CartContext from "../Context/cartContext";
// Components
import { NoCard } from "../components/NoCard";
import { CartProduct } from "../components/cart/CartProduct";
import { CartSummary } from "../components/cart/CartSummary";
import { HeadTitle } from "../components/HeadTitle";

const Cart = () => {
  const { cart, removeCart, quantityUp, quantityDown } =
    useContext(CartContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (cart.length === 0) {
    return <NoCard name="cart" />;
  } else {
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
  }
};

export default Cart;
