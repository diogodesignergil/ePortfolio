import React from "react";
import "./projects.css";

import Line from "../components/Line";

import { useTranslation } from "react-i18next";

import { Button } from "../components/Button";
import ProjectCards from "../components/ProjectCards";

import { motion } from "framer-motion/dist/framer-motion";

import data from "../data/data.js";

// Array
const allProjects = data.projects;

function Projects() {
	const [t] = useTranslation();

	return (
		<motion.section
			className="projects"
			initial={{ y: window.innerHeight, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{
				y: window.innerHeight,
				opacity: 0,
				transition: { duration: 0.1 },
			}}
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
								descrition={projectsStatus.descriptionCard}
								link={projectsStatus.link}
							/>
						);
					})}
			</div>
		</motion.section>
	);
}

export default Projects;
