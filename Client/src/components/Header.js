import React, { Component } from "react";
import Logo from "../asset/img/logo.png";
import "./Header/header.css";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} />
          <h1>Reveratel</h1>
        </div>

        {/* Menu tipo hambuger */}
      </div>
    );
  }
}
