// Images
import heroBanner from "../assets/images/hero-banner.jpg";
import decorationImage from "../assets/images/decoration-img.jpg";
import accessoriesImage from "../assets/images/accessories-img.jpg";
import categoryDecoration from "../assets/images/category-decoration.jpg";

// Components
import { HomeProducts } from "../components/HomeProducts";
import { HomeDesign } from "../components/HomeDesign";
import { ShopNow } from "../components/ShopNow";
import { CollectionDecoration } from "../components/CollectionDecoration";

const Home = () => {
  const data = [
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
    {
      image: heroBanner,
    },
  ];

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
        <HomeProducts data={data} title="New products" />
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
        <HomeProducts data={data} title="Bestseller" />
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
        <HomeProducts data={data} title="Recent viewed" />
      </section>
    </main>
  );
};

export default Home;
