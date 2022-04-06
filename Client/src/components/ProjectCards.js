import React, { useState, useEffect } from "react";
import "./projectCards.css";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import IMGAfterEffect from "../asset/img/Tech/after-effects.png";
import IMGCss from "../asset/img/Tech/css-3.png";
import IMGC from "../asset/img/Tech/c.png";
import IMGC2 from "../asset/img/Tech/c2.png";
import IMGHtml from "../asset/img/Tech/html.png";
import IMGIllustrator from "../asset/img/Tech/illustrator.png";
import IMGJava from "../asset/img/Tech/java.png";
import IMGJs from "../asset/img/Tech/js.png";
import IMGNode from "../asset/img/Tech/node.png";
import IMGPhotoshop from "../asset/img/Tech/photoshop.png";
import IMGPHP from "../asset/img/Tech/php.png";
import IMGPremiere from "../asset/img/Tech/premiere-pro.png";
import IMGReact from "../asset/img/Tech/react.png";

const ProjectCards = ({ icons, title, descrition, link, image, altImg }) => {
	const [t] = useTranslation();

	const [getTechnologies, setTechnologies] = useState([]);

	function TechImage(technologyList) {
		let tech = [];
		technologyList.forEach((element) => {
			switch (element) {
				case "af":
					tech.push({ src: IMGAfterEffect, alt: "Adobe After Effect" });
					break;
				case "css":
					tech.push({ src: IMGCss, alt: "CSS" });
					break;
				case "c#":
					tech.push({ src: IMGC, alt: "C#" });
					break;
				case "c++":
					tech.push({ src: IMGC2, alt: "C++" });
					break;
				case "html":
					tech.push({ src: IMGHtml, alt: "HTML5" });
					break;
				case "illustrator":
					tech.push({ src: IMGIllustrator, alt: "Adobe Illustrator" });
					break;
				case "java":
					tech.push({ src: IMGJava, alt: "Java" });
					break;
				case "js":
					tech.push({ src: IMGJs, alt: "JavaScript" });
					break;
				case "node":
					tech.push({ src: IMGNode, alt: "Node" });
					break;
				case "photoshop":
					tech.push({ src: IMGPhotoshop, alt: "Adobe Photoshop" });
					break;
				case "php":
					tech.push({ src: IMGPHP, alt: "PHP" });
					break;
				case "premiere":
					tech.push({ src: IMGPremiere, alt: "Adobe Premiere Pro" });
					break;
				case "react":
					tech.push({ src: IMGReact, alt: "React" });
					break;
				default:
					break;
			}
		});
		setTechnologies(tech);
	}

	useEffect(() => {
		TechImage(icons);
	}, []);

	return (
		<div className="project-card">
			<div className="card-head">
				<img src={image} alt={altImg} />
			</div>
			<div className="card-body">
				{getTechnologies.map((Image) => {
					return <img src={Image.src} alt={Image.alt} className="icon" />;
				})}
				<h3>{title}</h3>
				<p>{descrition}</p>
			</div>
			<div className="card-footer">
				<Link to={link}>
					<span>{t("projects.more")} </span>
					<i className="far fa-angle-right" />
				</Link>
			</div>
		</div>
	);
};

export default ProjectCards;
