import React, { Component } from "react";
import "./header.css";
import Menu from "./menu/Menu";
import LanguageMenu from "./language/language";
import { Link } from "react-router-dom";

export class Header extends Component {
	render() {
		return (
			<header className="header">
				{/* Logo */}
				<div className="logo">
					<Link to="/">
						<img src="asset/img/logo.png" />
						<h1>Reveratel</h1>
					</Link>
				</div>
				{/* Menu Linguagens */}
				<LanguageMenu />
				{/* Menu tipo hambuger */}
				<Menu />
			</header>
		);
	}
}
