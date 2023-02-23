import React from "react";
import zen_logo from '../images/zen_logo.png'
import "./css/Navbar.css"

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <a href="/#">
          <img src={zen_logo} alt="logo"></img>
        </a>
      </div>
      <div className="nav-items">
        <a className="prd-btn" href="/#">Products</a>
        <a className="contact-btn" href="/#">Contacts</a>
        <button className="btn-cart">
          <a className="cart" href="/#">
            Cart
          </a>
        </button>
      </div>
    </div>
  );
};
