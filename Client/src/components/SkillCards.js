import React from "react";

import "./SkillCards.css";

import { useTranslation } from "react-i18next";

const STYLES = [
	"photoshop",
	"illustrator",
	"premierer",
	"aftereffect",
	"microOffice",
	"html",
	"css",
	"js",
	"php",
	"react",
	"cc",
	"java",
];

const LEVEL = ["basic", "interm", "intermplus", "adven", "advenplus"];

const SkillCards = ({ title, subtitle, level, cardStyle, cardLevel }) => {
	const checkCardStyle = STYLES.includes(cardStyle) ? cardStyle : STYLES[0];

	const checkCardLevel = LEVEL.includes(cardLevel) ? cardLevel : STYLES[0];

	const [t] = useTranslation();

	return (
		<div className={`card ${checkCardStyle}`}>
			<div className="card-skill">
				<h3>
					{title}
					<br></br>
					<label>{subtitle}</label>
				</h3>
				<p>
					{t("about.section2.level")} <br></br> <span>{level}</span>
				</p>
				<div className={`bar ${checkCardLevel}`}>
					<div />
					<div />
					<div />
					<div />
					<div />
				</div>
			</div>
		</div>
	);
};

export default SkillCards;
