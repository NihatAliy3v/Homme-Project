// Components
import { Card } from "../components/Card";
import { HeadTitle } from "../components/HeadTitle";
// Images
import { useContext, useEffect } from "react";
// Utils
import HeartContext from "../Context/heartContext";

const WishList = () => {
  const { removeHeart, addHeart, heart } = useContext(HeartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="wish-list">
      <div className="container">
        <div className="row">
          <HeadTitle name="Wishlist" title={true} />
        </div>
      </div>
      <section className="main-wrapper">
        <div className="container">
          <div className="row">
            <section className="product-list-main">
              <div className="product-list">
                {heart?.map((item, index) => (
                  <div key={index} className="card">
                    <Card
                      product={item}
                      removeHeart={() => removeHeart(item?.productId)}
                      variant="remove"
                    />
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

export default WishList;
