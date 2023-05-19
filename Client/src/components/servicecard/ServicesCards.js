import React from "react";

import { Link } from "react-router-dom";

import "./ServicesCards.css";

import { useTranslation } from "react-i18next";

const ServicesCards = ({ image, title, descrition, link }) => {
	const [t] = useTranslation();

	return (
		<div className="services-card">
			<div className="card-header">
				<img src={image} alt="" />
			</div>
			<div className="card-body">
				<h2>{title}</h2>
				<p>{descrition}</p>
			</div>
			<div className="card-footer">
				<Link to={link}>
					<span>{t("services.more")} </span>
					<i className="far fa-angle-right" />
				</Link>
			</div>
		</div>
	);
};

export default ServicesCards;
