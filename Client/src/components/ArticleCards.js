import React from "react";
import { Link } from "react-router-dom";
import "./articleCards.css";

import { useTranslation } from "react-i18next";

const ArticleCards = ({ image, altIMG, title, descrition, link }) => {
	const [t] = useTranslation();

	return (
		<div className="article-card">
			<div className="card-head">
				<img src={image} alt={altIMG} />
			</div>
			<div className="card-body">
				<h3>{title}</h3>
				<p>{descrition}</p>
			</div>
			<div className="card-footer">
				<Link to={link}>
					<span>{t("projectspage.read")} </span>
					<i className="far fa-angle-right" />
				</Link>
			</div>
		</div>
	);
};

export default ArticleCards;
