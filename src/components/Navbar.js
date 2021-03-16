import React, { useState, useContext, useEffect } from "react";
import CartIcon from "../images/shopping-cart.png";
import UserIcon from "../images/user.png";
import ChatIcon from "../images/chat.png";
import Cheesecake from "../images/cheesecake.jpg";
import { Link, useLocation } from "react-router-dom";
import { DataContext } from "./DataProvider";

export default function Navbar() {

  // Change navbar css when scrolling or in different page

  const [scrollY, setScrollY] = useState(0);
  let bg = "";

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  if (scrollY > 40) {
    bg = "nav navf ac";
  } else {
    bg = "nav navf";
  }

  const location = useLocation();

  // Get cart value

  const value = useContext(DataContext);
  const [cart] = value.cart;

  return (
    <nav className={location.pathname === "/doux" ? bg : "nav ac"}>
      <div className="nav-wrapper">
        {/* Logo */}

        <div className="logo-wrapper">
          <div className="logo-link">
            <div className="logo-a">
              <div className="ft-gv">
                <Link to="/doux">La Vie</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Search Input */}

        <div className="search-wrapper">
          <div className="w-full">
            <form>
              <input
                className="transparent-search"
                type="text"
                placeholder="Search..."
                
              />
            </form>
          </div>
        </div>

        {/* Icon */}

        <div className="icon-wrapper">
          <div className="icon-link cart">
            <Link to="/doux/cart">
              <img className="icon" src={CartIcon} alt="" />
            </Link>
            <span className="badge">{cart.length}</span>
            <div className="cart-tooltip">
              <div className="tooltip-title">Just Added</div>
              <div className="tooltip-product">
                <img src={Cheesecake} className="h-10" alt="" />
                <div className="product-name">Cheesecake</div>
                <div className="price-wrapper">
                  <div className="price">$100</div>
                  <div className="text-brown">Remove</div>
                </div>
              </div>

              <div className="tooltip-product">
                <img src={Cheesecake} className="h-10" alt="" />
                <div className="product-name">Cheesecake</div>
                <div className="price-wrapper">
                  <div className="price">$100</div>
                  <div className="text-brown">Remove</div>
                </div>
              </div>

              <div className="more-products">
                <Link to="/doux/cart" className="text-brown cart-link">
                  20+ More Products
                </Link>
                <a href="www.c.com" className="text-brown cart-link hidden">
                  Cart
                </a>
              </div>
            </div>
          </div>

          <div href="www.c.com" className="icon-link user">
            <Link to="/doux/login">
              <img className="icon" src={UserIcon} alt="" />
            </Link>
            <div className="user-tooltip">
              <div className="text-brown cart-link">Login</div>
              <div className="text-brown cart-link">Register</div>
            </div>
          </div>

          <a href="www.c.com" className="icon-link hidden">
            <img className="icon" src={ChatIcon} alt="" title="Chat" />
            <span className="badge">7</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
