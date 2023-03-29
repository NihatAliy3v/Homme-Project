import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
const HeartContext = createContext();

export const HeartProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [heart, setHeart] = useState([]);

  useEffect(() => {
    const localHeart = localStorage.getItem("heart");
    if (localHeart) {
      setHeart(JSON.parse(localHeart));
    }
  }, []);
  console.log(data);
  useEffect(() => {
    localStorage.setItem("heart", JSON.stringify(heart));
  }, [heart]);

  const addHeart = (id) => {
    const checkExist = heart.find((item) => item.productId === id);
    if (!checkExist) {
      const product = data.find((item) => item.productId === id);
      setHeart((prev) => [...prev, product]);
    }
  };
  const removeHeart = (id) => {
    const noProduct = heart.filter((item) => item.productId !== id);
    setHeart(noProduct);
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Product removed from wishlist",
    });
  };

  return (
    <HeartContext.Provider
      value={{
        heart,
        addHeart,
        removeHeart,
        data,
        setData,
      }}
    >
      {children}
    </HeartContext.Provider>
  );
};

export default HeartContext;
