import "./language.css";
import { React, useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageMenu() {
  const [t, i18n] = useTranslation();
  const [getLanguage, setLanguage] = useState(
    localStorage.getItem("i18nextLng") === "en"
      ? "menu.languages.english"
      : "menu.languages.portuguese"
  );
  const [getActive, setActive] = useState(
    localStorage.getItem("i18nextLng") === "en" ? "en" : "pt"
  );

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setActive(language);
    setLanguage(
      language === "en" ? "menu.languages.english" : "menu.languages.portuguese"
    );
  };

  return (
    <div className="nav-wrapper">
      <div className="sl-nav">
        {t("menu.languages.choosenLanguage")}:{" "}
        <ul>
          <li>
            <b>{t(getLanguage)}</b>{" "}
            <i className="fa fa-angle-down" aria-hidden="true"></i>
            <div className="triangle"></div>
            <ul>
              <li onClick={() => handleLanguageChange("pt")}>
                <i className="sl-flag flag-pt"></i>
                <span className={getActive === "pt" ? "active" : ""}>
                  {t("menu.languages.portuguese")}
                </span>
              </li>
              <li onClick={() => handleLanguageChange("en")}>
                <i className="sl-flag flag-en"></i>
                <span className={getActive === "en" ? "active" : ""}>
                  {t("menu.languages.english")}
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LanguageMenu;
