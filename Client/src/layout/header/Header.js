import React, { Component } from "react";
import Logo from "../../asset/img/logo.png";
import "./header.css";
import Menu from "./menu/Menu";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        {/* Menu tipo hambuger */}
        <Menu />
        {/* Logo */}
        <div className="logo">
          <a href="index">
            <img src={Logo} />
            <h1>Reveratel</h1>
          </a>
        </div>
      </div>
    );
  }
}
