import React, { Component } from "react";
import Logo from "../../../asset/img/logo.png";
import "./header.css";
import Menu from "./menu/Menu";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        {/* Menu tipo hambuger */}
        <Menu />
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={Logo} />
            <h1>Reveratel</h1>
          </Link>
        </div>
      </div>
    );
  }
}
