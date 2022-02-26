import "./language.css";
import { React } from "react";
import { useTranslation } from "react-i18next";

function LanguageMenu() {
  const [t, i18n] = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <nav>
      <div>
        <select onChange={handleLanguageChange}>
          <option value={"pt"}>{t("menu.languages.portuguese")}</option>
          <option value={"en"}>{t("menu.languages.english")}</option>
        </select>
      </div>
    </nav>
  );
}

export default LanguageMenu;
