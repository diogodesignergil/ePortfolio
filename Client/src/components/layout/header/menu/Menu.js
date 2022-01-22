// import React from "react";
import "./menu.css";
import { React, useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => setMode(!active);
  const closeMenu = () => setMode(false);

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
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
