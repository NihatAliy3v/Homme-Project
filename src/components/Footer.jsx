// Router
import { Link } from "react-router-dom";
// Images
import logo from "../assets/images/main_logo.svg";
// Icons
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-wrapper">
            <div className="subscribe">
              <h4 className="sub-title">Subscribe to our newsletter</h4>
              <div className="sub-input">
                <input type="text" placeholder="Your email address" />
                <button>Subscribe</button>
              </div>
            </div>
            <div className="footer-main">
              <Link className="footer-logo">
                <img src={logo} alt="" />
              </Link>
              <div className="list-container">
                <ul className="footer-list">
                  <h3 className="list-title">Company</h3>
                  <li className="list-item">
                    <Link className="list-link">About us</Link>
                  </li>
                  <li className="list-item">
                    <Link className="list-link">Stores</Link>
                  </li>
                  <li className="list-item">
                    <Link className="list-link">Contact</Link>
                  </li>
                </ul>
                <ul className="footer-list">
                  <h3 className="list-title">For customer</h3>
                  <li className="list-item">
                    <Link className="list-link">Payment methods</Link>
                  </li>
                  <li className="list-item">
                    <Link className="list-link">Delivery terms</Link>
                  </li>
                  <li className="list-item">
                    <Link className="list-link">Returns & Refunds</Link>
                  </li>
                </ul>
              </div>
              <div className="contact-container">
                <h3 className="title">Contact us</h3>
                <Link className="contact-link" to="tel:+994 51 384 82 83">
                  +994 51 384 82 83
                </Link>
              </div>
            </div>
            <div className="footer-bottom">
              <p className="copyright">© Copyright 2023 Homme.</p>
              <div className="social">
                <Link className="social-link">
                  <FaFacebookF className="social-icon face" />
                </Link>
                <Link className="social-link">
                  <AiOutlineInstagram className="social-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
