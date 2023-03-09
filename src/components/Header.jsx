// Router
import { Link } from "react-router-dom";
// Images
import logo from "../assets/images/main_logo.svg";
// Icons
import { BiUser, BiChevronDown } from "react-icons/bi";
import { BsCart2, BsXLg } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { TbSearch } from "react-icons/tb";
// Components
import { NavBar } from "./NavBar";
import { Search } from "./Search";
import { useState } from "react";

export const Header = () => {
  const [menu, setMenu] = useState(false);
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
            <div className="mb-menu">
              <AiOutlineMenu
                className="menu-icon"
                onClick={() => setMenu(true)}
              />
              {/* mb-navbar */}
              <nav className={`mb-nav ${menu ? "active" : ""}`}>
                <div className="mb-nav-top">
                  <Link
                    to="/"
                    className="homme-logo"
                    onClick={() => setMenu(false)}
                  >
                    <img src={logo} alt="" />
                  </Link>
                  <div>
                    <BsXLg className="x-icon" onClick={() => setMenu(false)} />
                  </div>
                </div>
                <div className="nav-main">
                  <ul className="nav-list" onClick={() => setMenu(false)}>
                    <li className="nav-item">
                      <Link to="newin" className="nav-link">
                        New In
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link">Home decor</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link">Dining</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link">Bathroom</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link">Kitchen</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link">Kids</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link">Living room</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link">Collections</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link">Sale</Link>
                    </li>
                  </ul>
                  <div className="mb-register-login">
                    <Link className="login">Sign in</Link>
                    <Link className="register">Signup</Link>
                  </div>
                </div>
              </nav>
            </div>

            <Link to="/" className="homme-logo">
              <img src={logo} alt="" />
            </Link>

            <div className="mb-search">
              <TbSearch className="search-icon" />
            </div>
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
                <IoMdHeartEmpty className="wish-list-icon" />
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
          <NavBar menu={menu} />
        </div>
      </div>
    </header>
  );
};
