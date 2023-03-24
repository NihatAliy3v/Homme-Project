// Router
import { Link } from "react-router-dom";

export const HomeDesign = ({ className, image, title, description }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className={`wrapper ${className}`}>
            <Link className="home-img">
              <img src={image} alt="" />
            </Link>
            <div className="content">
              <h2 className="title">{title}</h2>
              <p className="description">{description}</p>
              <Link className="go-products">Go to products</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
