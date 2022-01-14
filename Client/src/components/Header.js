import React, { Component } from "react";
import Logo from "../asset/img/Reveratel.png";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} width={50} />
          <h1>Reveratel</h1>
        </div>

        {/* Menu tipo hambuger */}
      </div>
    );
  }
}
