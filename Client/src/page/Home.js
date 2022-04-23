import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import "./home.css";
// Translation
import { useTranslation } from "react-i18next";

import CV from "../asset/document/CV-DiogoGil.pdf";
import Ring from "../asset/img/Ring.png";

import { motion } from "framer-motion/dist/framer-motion";

function Home() {
  const [t] = useTranslation();

  return (
    <motion.section
      className="home"
      id="home"
      initial={{ y: window.innerHeight, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{
        y: window.innerHeight,
        opacity: 0,
        transition: { duration: 0.1, ease: "easeInOut" },
      }}
    >
      <div className="max-width">
        <div className="home-content">
          <div className="static-txt-1">{t("home.text1")}</div>
          <div className="static-txt-2">
            Diogo <span>"Reveratel"</span> Gil
          </div>
          <div className="wrapper">
            <div className="static-txt-3">{t("home.text3")}</div>
            <ul className="dynamic-txts">
              <li>
                <span>Designer</span>
              </li>
              <li>
                <span>Developer</span>
              </li>
              <li>
                <span>Freelancer</span>
              </li>
            </ul>
          </div>
          <div className="button">
            <a href={CV} download>
              <Button buttonStyle="btn--outline" buttonSize="btn--large">
                <i className="fas fa-download" />
                &nbsp;{t("home.download")}
              </Button>
            </a>
            <Link to="/contact">
              <Button buttonStyle="btn--primary" buttonSize="btn--large">
                {t("home.hire")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="profil">
        <img src={Ring} alt="" />
      </div>
    </motion.section>
  );
}

export default Home;
