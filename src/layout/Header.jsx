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
import { NavBar } from "../components/NavBar";
import { Search } from "../components/Search";
import { useState } from "react";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const [SearchMenu, setSearchMenu] = useState(false);
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
                  <BsXLg className="x-icon" onClick={() => setMenu(false)} />
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

            <div className="mb-search-container">
              <TbSearch
                className="mb-search-icon"
                onClick={() => setSearchMenu(true)}
              />
              <div className={`mb-search ${SearchMenu ? "active" : ""}`}>
                <div className="mb-search-top">
                  <BsXLg
                    className="x-icon"
                    onClick={() => setSearchMenu(false)}
                  />
                </div>
                <div className="search-main">
                  <Search />
                </div>
              </div>
            </div>
            <div className="user">
              <div className="register-login-link">
                <Link className="login">Sign in</Link>
                <span className="drop">/</span>
                <Link className="register">Signup</Link>
              </div>
              <Link className="profile">
                <BiUser className="profile-icon" />
              </Link>
              <Link className="wish-list-link">
                <IoMdHeartEmpty className="wish-list-icon" />
              </Link>
              <Link to="/cart" className="cart-link">
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
