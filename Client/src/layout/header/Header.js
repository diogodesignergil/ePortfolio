import React, { Component } from "react";
import Logo from "../../asset/img/logo.png";
import "./header.css";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        {/* Logo */}
        <div className="logo">
          <a href="index">
            <img src={Logo} />
            <h1>Reveratel</h1>
          </a>
        </div>

        {/* Menu tipo hambuger */}
      </div>
    );
  }
}
