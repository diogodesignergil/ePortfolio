import React from "react";
import "./projects.css";

import { useTranslation } from "react-i18next";

import { Button } from "../../../../button/Button";

import ProjectCards from "../../../../projectcard/ProjectCards";

import data from "../../../../../data/data";

// Array
const allProjects = data.projects;

function Projects() {
  const [t] = useTranslation();

  return (
    <section className="projects" id="projects">
      <h1>{t("projects.title")}</h1>
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
                title={t(projectsStatus.title)}
                descrition={t(projectsStatus.descriptionCard)}
                link={projectsStatus.link}
              />
            );
          })}
      </div>
    </section>
  );
}

export default Projects;
