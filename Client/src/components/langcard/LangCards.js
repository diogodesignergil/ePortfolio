import React from "react";

import "./LangCards.css";

import { useTranslation } from "react-i18next";

const STYLES = ["portugal", "english", "france"];

const LangCards = ({ title, speakPer, writePer, langStyle }) => {
  const checkLangStyle = STYLES.includes(langStyle) ? langStyle : STYLES[0];

  const [t] = useTranslation();

  return (
    <div className={`card-language ${checkLangStyle}`}>
      <div className="card-lang">
        <h3>{title}</h3>
        <div className="card-progress">
          <div className="overflow">
            <div className="circle-progress fala">
              <div>
                <span>{speakPer}</span>
                <br></br>
                <label>{t("about.section3.speak")}</label>
              </div>
            </div>
          </div>
          <div className="overflow">
            <div className="circle-progress escrita">
              <div>
                <span>{writePer}</span>
                <br></br>
                <label>{t("about.section3.write")}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LangCards;
