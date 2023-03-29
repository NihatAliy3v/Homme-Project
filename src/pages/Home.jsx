// Images
import heroBanner from "../assets/images/hero-banner.jpg";
import decorationImage from "../assets/images/decoration-img.jpg";
import accessoriesImage from "../assets/images/accessories-img.jpg";
import categoryDecoration from "../assets/images/category-decoration.jpg";

// Components
import { HomeProducts } from "../components/home/HomeProducts";
import { HomeDesign } from "../components/home/HomeDesign";
import { ShopNow } from "../components/home/ShopNow";
import { CollectionDecoration } from "../components/home/CollectionDecoration";
import { Advantages } from "../components/home/Advantages";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "../components/Loading";

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    await axios
      .get("https://localhost:44317/api/Products/getAll")
      .then((res) => setProductData(res.data.data))
      .then(() => setLoading(true));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!loading) {
    return <Loading />;
  } else {
    return (
      <main className="home">
        <section className="hero">
          <div className="hero-img">
            <img src={heroBanner} alt="" />
          </div>
        </section>

        <section className="shop-now">
          <ShopNow />
        </section>

        <section className="new-products">
          <HomeProducts
            data={productData}
            title="New products"
            viewAll="newin"
            navigationClassName="mySwiper"
          />
        </section>

        <section className="home-decoration">
          <HomeDesign
            className="left"
            image={decorationImage}
            title="HOME DECORATION"
            description="Transform your home"
          />
        </section>

        <section className="bestseller">
          <HomeProducts
            data={productData}
            title="Bestseller"
            viewAll="newin"
            navigationClassName="mySwiper2"
          />
        </section>

        <section className="home-accessories">
          <HomeDesign
            className="right"
            image={accessoriesImage}
            title="HOME ACCESSORIES"
            description="Discover homeware to transform your space"
          />
        </section>

        <section className="banner-decoration">
          <CollectionDecoration
            image={categoryDecoration}
            link="SHOP THE COLLECTION"
          />
        </section>

        <section className="recent-viewed">
          <HomeProducts
            data={productData}
            title="Recent viewed"
            navigationClassName="asfa"
          />
        </section>

        <section className="advantages">
          <Advantages />
        </section>
      </main>
    );
  }
};

export default Home;
