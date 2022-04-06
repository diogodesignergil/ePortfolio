import React, { useEffect, useState } from "react";
import "./articlepage.css";

import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

import Error404 from "./Error404";

import { motion } from "framer-motion/dist/framer-motion";

import Line from "../components/Line";
import { Button } from "../components/Button";

import data from "../data/data";

const projects = data.projects;

function ArticlePage() {
	const { id, articleid } = useParams();
	const [getNextArticleData, setNextArticle] = useState({});
	const [getPrevArticleData, setPrevArticle] = useState({});
	const [getArticleData, setArticle] = useState({});

	function getElement(articleID, type) {
		const elementType = type == "next" ? 1 : -1;
		const sum = parseInt(articleID) + elementType;
		return getArticle(id, sum);
	}

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
		setNextArticle(getElement(articleid, "next"));
		setPrevArticle(getElement(articleid, "prev"));
	}, []);

	return (
		<motion.div
			initial={{ y: window.innerHeight, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{
				y: window.innerHeight,
				opacity: 0,
				transition: { duration: 0.1 },
			}}
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
						{getPrevArticleData !== undefined ? (
							<Link to={`${getPrevArticleData.link}`}>
								<Button buttonStyle="btn--outline" buttonSize="btn--large">
									<div className="prev">
										<i className="fas fa-angle-left" />
										<div>
											<h4>{t("projects.prev")}</h4>
											<p>{t(getPrevArticleData.title)}</p>
										</div>
									</div>
								</Button>
							</Link>
						) : (
							<></>
						)}
						{getNextArticleData !== undefined ? (
							<Link to={`${getNextArticleData.link}`}>
								<Button buttonStyle="btn--outline" buttonSize="btn--large">
									<div className="next">
										<div>
											<h4>{t("projects.next")}</h4>
											<p>{t(getNextArticleData.title)}</p>
										</div>
										<i className="fas fa-angle-right" />
									</div>
								</Button>
							</Link>
						) : (
							<></>
						)}
					</div>
				</section>
			) : (
				<Error404 />
			)}
		</motion.div>
	);
}

export default ArticlePage;
