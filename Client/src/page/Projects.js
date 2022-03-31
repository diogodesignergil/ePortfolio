import React from "react";
import "./projects.css";

import Line from "../components/Line";

import { useTranslation } from "react-i18next";

import { Button } from "../components/Button";
import ProjectCards from "../components/ProjectCards";

// Images
import EsportGroup from "../asset/img/Portfoliogroup.png";
import MagicOverlay from "../asset/img/magicoverlay.png";

// Array
const allProjects = [
	{
		id: 1,
		image: EsportGroup,
		altImg: "Team Eagle",
		icons: ["html", "js", "css", "php"],
		title: "Team Eagle: E-Sport Team",
		discrition:
			"Página Web Full-Stock com objetivo no uso para uma equipa de competição de vídeo jogos. E este template podera ser usado para futuras paginações.",
		link: "/projects/1",
	},
	{
		id: 2,
		image: MagicOverlay,
		altImg: "Magic: The Gathering Overlay",
		icons: ["photoshop", "af"],
		title: "Magic: The Gathering Overlay",
		discrition:
			"Uma coleção completa de overlay streaming com tema titulada de Magic: the Gathering, um jogo de cartas criado por Wizard Coast.",
		link: "/projects/2",
	},
	{
		id: 3,
		image: "",
		altImg: "Triangle Spark Overlay",
		icons: ["illustrator", "af", "photoshop"],
		title: "Triangle Spark Overlay",
		discrition:
			"Uma coleção completa de overlay streaming com tema aleatório usando formas de triângulos.",
		link: "/projects/3",
	},
];

function Projects() {
	const [t] = useTranslation();

	return (
		<section className="projects">
			<h1>{t("projects.title")}</h1>
			<Line />
			<p>
				{t("projects.info1")} <br></br> {t("projects.info2")}
			</p>
			<Button buttonSize="btn--large" buttonStyle="btn--patreon">
				{t("projects.patreon")}&nbsp;
				<i className="fab fa-patreon" />
			</Button>
			<div className="card-container">
				{allProjects.map((projectsStatus) => {
					return (
						<ProjectCards
							key={projectsStatus.id}
							image={projectsStatus.image}
							altImg={projectsStatus.altImg}
							icons={projectsStatus.icons}
							title={projectsStatus.title}
							descrition={projectsStatus.discrition}
							link={projectsStatus.link}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default Projects;
