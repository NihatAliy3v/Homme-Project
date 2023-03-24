// Router
import { Link } from "react-router-dom";
// Icons
import { HiArrowLongRight } from "react-icons/hi2";

export const CollectionDecoration = ({ image, link }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="collection-wrapper">
          <Link className="img">
            <img src={image} alt="" />
          </Link>
          <Link className="collection-link">
            {link} <HiArrowLongRight className="collection-arrow"/>
          </Link>
        </div>
      </div>
    </div>
  );
};
