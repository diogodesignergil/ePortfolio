import React, { useEffect, useState } from "react";
import Error404 from "./Error404";
import { useParams } from "react-router-dom";
import "./projectspage.css";
import ArticleCards from "../components/ArticleCards";

// Tradutor
import { useTranslation } from "react-i18next";
import Line from "../components/Line";

// Team Eagle
import data from "../data/data.js";
import { motion } from "framer-motion/dist/framer-motion";

const projects = data.projects;

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
      initial={{ y: window.innerHeight, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{
        y: window.innerHeight,
        opacity: 0,
        transition: { duration: 0.1 },
      }}
    >
      {checkArray(parseInt(id)) ? (
        <section className="projectspage">
          <h1>{t(getProjectData.title)}</h1>
          <Line />
          <p className="descrition">{t(getProjectData.description)}</p>
          <img src={getProjectData.image} alt={getProjectData.altImg} />
          <div className="evol-contianer">
            <h2>{t("projects.evolution")}</h2>
            <Line />
            <div className="cards-container">
              {getProjectData.article?.map((article) => {
                return (
                  <ArticleCards
                    key={article.id}
                    image={article.image}
                    altIMG={article.altIMG}
                    title={t(article.title)}
                    descrition={t(article.description)}
                    link={article.link}
                  />
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <Error404 />
      )}
    </motion.div>
  );
}

export default ProjectsPage;
