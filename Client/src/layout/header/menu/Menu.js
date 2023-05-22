// import React from "react";
import "./menu.css";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageMenu from "../language/language";

function Menu() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => setMode(!active);
  const closeMenu = () => setMode(false);
  const [t] = useTranslation();

  return (
    <div className="navbar">
      <div className={active ? "menu menuOpen" : "menu menuClose"}>
        <div className="list">
          <ul className="listItem">
            <li>
              <a href="#home" onClick={closeMenu}>
                {t("menu.sidebar.home")}
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                {t("menu.sidebar.about")}
              </a>
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
      <LanguageMenu />{" "}
      <nav>
        <div
          className={active ? "icon iconActive" : "icon"}
          onClick={ToggleMode}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
