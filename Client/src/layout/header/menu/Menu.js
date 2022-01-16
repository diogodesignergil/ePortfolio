// import React from "react";
import "./menu.css";
import { useState } from "react";

function Menu() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };
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
            <li>Home</li>
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
