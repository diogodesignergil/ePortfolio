import React, { useEffect, useState } from "react";
import Error404 from "./Error404";
import { useParams } from "react-router-dom";
import "./projectspage.css";

// Tradutor
import { useTranslation } from "react-i18next";
import Line from "../components/Line";

// Image

// Team Eagle
import EsportGroup from "../asset/img/Portfoliogroup.png";
import ArticleCards from "../components/ArticleCards";

import { motion } from "framer-motion/dist/framer-motion";

const projects = [
	{
		id: 1,
		title: "TEAM EAGLE: E-SPORT TEAM",
		image: EsportGroup,
		altIMG: "E-sport Group Screenshot",
		descrition:
			"Este projeto teve início durante a formação que realizei como projeto final. Era para servir como grupo onde estou para mostramos o que andávamos a fazer enquanto criadores de conteúdos. Mas tomou uma rota diferente e acabou por ser um para um grupo de E-sports. E neste projeto contem vários processos que chegar a conclusão final e ficou como modelo para ser usado para vários grupos.",
		article: [
			{
				id: 1,
				image: "",
				altIMG: "",
				title: "Teste",
				descrition: "Teste de texto",
				link: "/projects/1/article/1",
			},
			{
				id: 2,
				image: "",
				altIMG: "",
				title: "Teste",
				descrition: "Teste de texto",
				link: "/projects/1/article/2",
			},
		],
	},
	{ id: 2, title: "Test2" },
	{ id: 3, title: "Test3" },
	{ id: 4, title: "Test4" },
];

function ProjectsPage() {
	const { id } = useParams();
	const [getProjectData, setProject] = useState({});

	function checkArray(id) {
		return projects.some(function (project) {
			return project.id === id;
		});
	}

	function getProject(id) {
		return projects.find(function (project) {
			return project.id === parseInt(id);
		});
	}

	const [t] = useTranslation();

	useEffect(() => {
		setProject(getProject(id));
	}, []);

	return (
		<motion.div
			initial={{ with: 0 }}
			animate={{ with: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
		>
			{checkArray(parseInt(id)) ? (
				<section className="projectspage">
					<h1>{t(getProjectData.title)}</h1>
					<Line />
					<p className="descrition">{t(getProjectData.descrition)}</p>
					<img
						src={getProjectData.image}
						alt={getProjectData.altIMG}
						className="project-img"
					/>
					<h2>{t("projectspage.articles")}</h2>
					<Line />
					<div className="cards-container">
						{getProjectData.article?.map((article) => {
							return (
								<ArticleCards
									key={article.id}
									image={article.image}
									altIMG={article.altIMG}
									title={t(article.title)}
									descrition={t(article.descrition)}
									link={article.link}
								/>
							);
						})}
					</div>
				</section>
			) : (
				<Error404 />
			)}
		</motion.div>
	);
}

export default ProjectsPage;
