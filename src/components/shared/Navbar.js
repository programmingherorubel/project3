import React, { useState } from "react";
import { useSelector } from "react-redux";
import logo from "../../images/logo.png";

const Navbar = ({ setCartPage, setHomePage }) => {
  const { cart } = useSelector((state) => state.product);

  return (
    <header>
      <nav class="bg-[#171C2A] py-4">
        <div class="navBar">
          <a href="index.html">
            <img src={logo} alt="LWS" class="max-w-[140px]" />
          </a>

          <div class="flex gap-4">
            <button
              onClick={() => {
                setHomePage(true);
                setCartPage(false);
              }}
              class="navHome"
              id="lws-home"
            >
              {" "}
              Home{" "}
            </button>
            <button
              onClick={() => {
                setHomePage(false);
                setCartPage(true);
              }}
              class="navCart"
              id="lws-cart"
            >
              <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">{cart.length}</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
