// Router
import { Link } from "react-router-dom";
//Images
import logo from "../assets/images/main_logo.svg";
//icons
import { BiUser, BiChevronDown } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { SlHeart } from "react-icons/sl";
//Components
import { NavBar } from "./NavBar";
import { Search } from "./Search";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="left">
              <Search />
              <Link className="language">
                EN
                <BiChevronDown className="l-down" />
              </Link>
            </div>

            <Link to="/" className="homme-logo">
              <img src={logo} alt="" />
            </Link>

            <div className="user">
              <div className="register-login">
                <Link className="login">Sign in</Link>
                <span className="drop">/</span>
                <Link className="register">Signup</Link>
              </div>
              <Link className="profile">
                <BiUser className="profile-icon" />
              </Link>
              <Link className="wish-list">
                <SlHeart className="wish-list-icon" />
              </Link>
              <Link className="cart">
                <BsCart2 className="cart-icon" />
                <div className="numerical">
                  <span className="total">Total</span>
                  <span className="price">0 &#x20BC;</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <NavBar />
        </div>
      </div>
    </header>
  );
};
