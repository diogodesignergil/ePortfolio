import React, { useEffect, useState } from "react";
import "./articlepage.css";

import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

import Error404 from "./Error404";

import { motion } from "framer-motion/dist/framer-motion";
import Line from "../components/Line";
import { Button } from "../components/Button";

import EsportGroup from "../asset/img/Portfoliogroup.png";

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
				text: ["test", "test2", "test3"],
				next: [{ link: "/projects/1/article/2", title: "Test" }],
			},
			{
				id: 2,
				image: "",
				altIMG: "",
				title: "Teste2",
				descrition: "Teste de texto",
				link: "/projects/1/article/2",
				text: ["test", "test2", "test3"],
				prev: [{ link: "/projects/1/article/1", title: "Test" }],
				next: [{ link: "/projects/1/article/3", title: "Test" }],
			},
		],
	},
	{ id: 2, title: "Test2" },
	{ id: 3, title: "Test3" },
	{ id: 4, title: "Test4" },
];

function ArticlePage() {
	const { id, articleid } = useParams();

	const [getArticleData, setArticle] = useState({});

	function checkArray(id, articleID) {
		const projectExist = projects.some(function (project) {
			return project.id === id;
		});

		if (projectExist) {
			const articleExist = projects.some(function (project) {
				return project.hasOwnProperty("article");
			});

			if (articleExist) {
				const project = projects.find(function (project) {
					return project.id === id;
				})?.article;

				return project.some(function (article) {
					return article.id === articleID;
				});
			}

			return articleExist;
		}
		return projectExist;
	}

	function getArticle(id, articleid) {
		const project = projects.find(function (project) {
			return project.id === parseInt(id);
		})?.article;
		if (project === undefined) {
			return null;
		}
		return project.find(function (article) {
			return article.id === parseInt(articleid);
		});
	}

	const [t] = useTranslation();

	useEffect(() => {
		setArticle(getArticle(id, articleid));
	}, []);

	return (
		<motion.div
			initial={{ with: 0 }}
			animate={{ with: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
		>
			{checkArray(parseInt(id), parseInt(articleid)) ? (
				<section className="articlepage">
					<h1>{t(getArticleData.title)}</h1>
					<Line />
					<img src={getArticleData.image} alt={getArticleData.altIMG} />
					<p>{t(getArticleData.descrition)}</p>
					{getArticleData.text?.map((text) => {
						return <p>{t(text)}</p>;
					})}
					<div className="paginate-container">
						{getArticleData.prev?.map((prev) => {
							return (
								<Link to={prev.link}>
									<Button buttonStyle="btn--outline" buttonSize="btn--large">
										<div className="prev">
											<i className="fas fa-angle-left" />
											<div>
												<h4>Previous</h4>
												<p>{prev.title}</p>
											</div>
										</div>
									</Button>
								</Link>
							);
						})}
						{getArticleData.next?.map((next) => {
							return (
								<Link to={next.link}>
									<Button buttonStyle="btn--outline" buttonSize="btn--large">
										<div className="next">
											<div>
												<h4>Next</h4>
												<p>{next.title}</p>
											</div>
											<i className="fas fa-angle-right" />
										</div>
									</Button>
								</Link>
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

export default ArticlePage;
