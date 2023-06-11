import React from "react";
import "./services.css";

import { useTranslation } from "react-i18next";

import ServicesCards from "../../../../components/servicecard/ServicesCards";
import Feedback from "../../../../components/feedback/Feedback";

import data from "../../../../data/data";
import { Button } from "../../../../components/button/Button";

import Fiverr from "../../../../asset/img/fiverrLogo.png";

const allServices = data.services;

function Services() {
  const [t] = useTranslation();

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h1>{t("services.title")}</h1>
        <p>{t("services.info")}</p>
        <div className="services-wrap">
          {allServices.map((servicesStatus) => {
            return (
              <ServicesCards
                key={servicesStatus.id}
                cardStyle={servicesStatus.style}
                icon={servicesStatus.icon}
                title={t(servicesStatus.title)}
                descrition={t(servicesStatus.descrition)}
                link={servicesStatus.link}
              />
            );
          })}
        </div>
        <div className="fiverr-container">
          <span>or</span>
          <a href="https://www.fiverr.com/reveratel" target="_blank">
            <Button buttonStyle="btn--fiverr" buttonSize="btn--large">
              <img src={Fiverr} alt="fiverr" />
            </Button>
          </a>
        </div>
      </div>
      <Feedback />
    </section>
  );
}

export default Services;
