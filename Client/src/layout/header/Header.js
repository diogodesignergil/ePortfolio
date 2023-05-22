import React, { useState } from "react";
import "./header.css";
import Menu from "./menu/Menu";
import LanguageMenu from "./language/language";
import { Link } from "react-router-dom";

import Logo from "../../asset/img/logo.png";

function Header() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header className={navbar ? "header scroller" : "header"}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
            <h1>
              <span className="name1">Diogo</span>
              <div className="diamond"></div>
              <span className="name2">Gil</span>
            </h1>
          </Link>
        </div>
        {/* Menu Linguagens */}
        <LanguageMenu />
        {/* Menu tipo hambuger */}
        <Menu />
      </div>
    </header>
  );
}

export default Header;
