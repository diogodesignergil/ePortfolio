import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import EsportGroup from "../asset/img/Portfoliogroup.png";
import Error404 from "./Error404";

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
				link: "/projects/1/1",
			},
			{
				id: 2,
				image: "",
				altIMG: "",
				title: "Teste",
				descrition: "Teste de texto",
				link: "/projects/1/2",
			},
		],
	},
	{ id: 2, title: "Test2" },
	{ id: 3, title: "Test3" },
	{ id: 4, title: "Test4" },
];

function ArticlePage() {
	const { id } = useParams();
	const { articleid } = useParams();

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
		<div>
			{checkArray(parseInt(id), parseInt(articleid)) ? (
				<div>ArticlePage</div>
			) : (
				<Error404 />
			)}
		</div>
	);
}

export default ArticlePage;
