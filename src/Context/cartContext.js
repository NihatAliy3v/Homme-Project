import { createContext, useEffect, useState } from "react";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  console.log(cartData);
  const addCart = (id, count) => {
    const checkExist = cart.find((item) => item.productId === id);

    if (checkExist) {
      const nonExist = cart.filter((item) => item.productId !== id);
      setCart([
        ...nonExist,
        { ...checkExist, quantity: checkExist.quantity + count },
      ]);
    } else {
      const product = cartData.find((item) => item.productId === id);
      setCart((prev) => [...prev, { ...product, quantity: count }]);
      console.log();
    }
  };
  const removeCart = (id) => {
    const noProduct = cart.filter((item) => item.productId !== id);
    setCart(noProduct);
  };
  const quantityUp = (id) => {
    setCart((prev) => {
      return prev.map((item) =>
        item.productId === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };
  const quantityDown = (id) => {
    setCart((prev) => {
      return prev.map((item) =>
        item.productId === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        removeCart,
        cartData,
        setCartData,
        quantityUp,
        quantityDown,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
