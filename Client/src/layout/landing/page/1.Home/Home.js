import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/button/Button";
import TypewriterAnimation from "../../../../components/typewriter/TypewriterAnimation";
import "./home.css";
// Translation
import { useTranslation } from "react-i18next";

import CV from "../../../../asset/document/CV-DiogoGil.pdf";
import Photo from "../../../../asset/img/Rever Home Photo.png";

function Home() {
  const [t] = useTranslation();

  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="static-txt-1">{t("home.text1")}</div>
          <div className="static-txt-2">
            Diogo <span>"Reveratel"</span> Gil
          </div>
          <div className="wrapper">
            <div className="static-txt-3">{t("home.text3")}</div>
            <TypewriterAnimation />
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
      <div className="photo">
        <img src={Photo} />
      </div>
    </section>
  );
}

export default Home;
