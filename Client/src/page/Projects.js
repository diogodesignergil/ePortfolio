import React from "react";
import "./projects.css";

import Line from "../components/Line";

import { useTranslation } from "react-i18next";

import { Button } from "../components/Button";
import ProjectCards from "../components/ProjectCards";

// Images
import EsportGroup from "../asset/img/Portfoliogroup.png";
import MagicOverlay from "../asset/img/magicoverlay.png";

import { motion } from "framer-motion/dist/framer-motion";

// Array
const allProjects = [
	{
		id: 1,
		image: EsportGroup,
		altImg: "Team Eagle",
		icons: ["html", "js", "css", "php"],
		title: "Team Eagle: E-Sport Team",
		descrition:
			"Página Web Full-Stock com objetivo no uso para uma equipa de competição de vídeo jogos. E este template podera ser usado para futuras paginações.",
		link: "/projects/1",
		sort: Math.random(),
	},
	{
		id: 2,
		image: MagicOverlay,
		altImg: "Magic: The Gathering Overlay",
		icons: ["photoshop", "af"],
		title: "Magic: The Gathering Overlay",
		descrition:
			"Uma coleção completa de overlay streaming com tema titulada de Magic: the Gathering, um jogo de cartas criado por Wizard Coast.",
		link: "/projects/2",
		sort: Math.random(),
	},
	{
		id: 3,
		image: "",
		altImg: "Triangle Spark Overlay",
		icons: ["illustrator", "af", "photoshop"],
		title: "Triangle Spark Overlay",
		descrition:
			"Uma coleção completa de overlay streaming com tema aleatório usando formas de triângulos.",
		link: "/projects/3",
		sort: Math.random(),
	},
	{
		id: 3,
		image: "",
		altImg: "ePortfolio",
		icons: ["react", "node", "js", "css", "html"],
		title: "Meu ePortfolio",
		descrition:
			"Criação do meu ePortfolio para mostrar os meus trabalhos e os projetos andei envolvido.",
		link: "/projects/4",
		sort: Math.random(),
	},
];

function Projects() {
	const [t] = useTranslation();

	return (
		<motion.section
			className="projects"
			initial={{ with: 0 }}
			animate={{ with: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
		>
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
				{allProjects
					.sort((a, b) => a.sort - b.sort)
					.map((projectsStatus) => {
						return (
							<ProjectCards
								key={projectsStatus.id}
								image={projectsStatus.image}
								altImg={projectsStatus.altImg}
								icons={projectsStatus.icons}
								title={projectsStatus.title}
								descrition={projectsStatus.descrition}
								link={projectsStatus.link}
							/>
						);
					})}
			</div>
		</motion.section>
	);
}

export default Projects;
