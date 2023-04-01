// Context
import HeartContext from "../Context/heartContext";
import { NoCard } from "../components/NoCard";
// Components
import { Card } from "../components/Card";
import { HeadTitle } from "../components/HeadTitle";
// Images
import { useContext, useEffect } from "react";

const WishList = () => {
  const { removeHeart, heart } = useContext(HeartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (heart.length === 0) {
    return <NoCard name="whishlist" />;
  } else {
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
  }
};

export default WishList;
