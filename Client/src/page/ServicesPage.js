import React, { useEffect, useState } from "react";
import Error404 from "./Error404";
import { useParams } from "react-router-dom";
import "./servicespage.css";

// Tradutor
import { useTranslation } from "react-i18next";

// Line
import Line from "../components/Line.js";

// Button
import { Button } from "../components/Button.js";
import FiverrLogo from "../asset/img/fiverrLogo.png";

import { motion } from "framer-motion/dist/framer-motion";
import data from "../data/data.js";

const services = data.servicespage;

function ServicesPage() {
  const { id } = useParams();
  const [getServiceData, setService] = useState({});

  function checkArray(id) {
    return services.some(function (service) {
      return service.id === id;
    });
  }

  function getService(id) {
    return services.find(function (service) {
      return service.id === parseInt(id);
    });
  }

  const [t] = useTranslation();

  useEffect(() => {
    setService(getService(id));
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
        <section className="servicepage">
          <h1>{t(getServiceData.title)}</h1>
          <Line />
          <p className="info">
            {t(getServiceData.info)}
            <br></br>
            <span className="info2">{t(getServiceData.info2)}</span>
          </p>

          {getServiceData.step?.map((step) => {
            return (
              <div className="step">
                <span>{step.number}</span>
                <div className="text">
                  <h2>{t(step.title)}</h2>
                  <p>{t(step.text)}</p>
                </div>
                <img src={step.image} alt="" />
              </div>
            );
          })}
          <Button buttonStyle="btn--fiverr" buttonSize="btn--large">
            <img src={FiverrLogo} alt="" />
          </Button>
        </section>
      ) : (
        <Error404 />
      )}
    </motion.div>
  );
}

export default ServicesPage;
