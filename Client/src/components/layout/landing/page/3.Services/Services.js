import React from "react";
import "./services.css";

import { useTranslation } from "react-i18next";

import ServicesCards from "../../../../servicecard/ServicesCards";
import Feedback from "../../../../feedback/Feedback";

import data from "../../../../../data/data";

const allServices = data.services;

function Services() {
  const [t] = useTranslation();

  return (
    <section className="services" id="services">
      <h1>{t("services.title")}</h1>
      <p>{t("services.info")}</p>

      <div className="services-container">
        {allServices.map((servicesStatus) => {
          return (
            <ServicesCards
              key={servicesStatus.id}
              image={servicesStatus.image}
              title={t(servicesStatus.title)}
              descrition={t(servicesStatus.descrition)}
              link={servicesStatus.link}
            />
          );
        })}
      </div>
      <Feedback />
    </section>
  );
}

export default Services;
