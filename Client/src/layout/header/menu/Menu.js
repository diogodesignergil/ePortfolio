// import React from "react";
import "./menu.css";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Menu() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => setMode(!active);
  const closeMenu = () => setMode(false);
  const [t] = useTranslation();

  return (
    <nav>
      <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={active ? "menu menuOpen" : "menu menuClose"}>
        <div className="list">
          <ul className="listItem">
            <li>
              <Link to="/" onClick={closeMenu}>
                {t("menu.sidebar.home")}
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                {t("menu.sidebar.about")}
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={closeMenu}>
                {t("menu.sidebar.services")}
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={closeMenu}>
                {t("menu.sidebar.projects")}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>
                {t("menu.sidebar.contact")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
