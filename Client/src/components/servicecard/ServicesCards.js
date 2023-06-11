import React from "react";

import "./ServicesCards.css";

import { useTranslation } from "react-i18next";

const STYLES = ["design", "webdesign", "mediadesign"];

const ServicesCards = ({ cardStyle, icon, title, descrition, link }) => {
  const checkCardStyle = STYLES.includes(cardStyle) ? cardStyle : STYLES[0];

  const [t] = useTranslation();

  return (
    <div className={`services-card ${checkCardStyle}`}>
      <div className="card-header">
        <i class={icon}></i>
      </div>
      <div className="card-body">
        <h2>{title}</h2>
        <p>{descrition}</p>
      </div>
      <div className="card-footer">
        <button>
          <span>{t("services.more")} </span>
          <i class="fa-solid fa-diagram-project"></i>
        </button>
      </div>
    </div>
  );
};

export default ServicesCards;
