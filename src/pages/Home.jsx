// Router
import { Link } from "react-router-dom";
// Images
import heroBanner from "../assets/images/hero-banner.jpg";
// Icons
import { MdArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-img">
          <img src={heroBanner} alt="" />
        </div>
      </section>
      <section className="shop-now">
        <div className="container">
          <div className="row">
            <h2 className="shop-title">
              New collection of wine glasses and decanters !
            </h2>
            <p className="description">
              Bring sophistication to your table setting with our products!
            </p>
            <Link className="shop-link">
              SHOP NOW <MdArrowRight className="shop-arrow"/>
            </Link>
          </div>
        </div>
      </section>
        
    </main>
  );
};

export default Home;
