import React from "react";

import "./error404.css";

import { useTranslation } from "react-i18next";

function Error404() {
  const [t] = useTranslation();

  return (
    <section className="error">
      <h1>404</h1>
      <p>Oooops...</p>
      <p>{t("error.notfound")}</p>
    </section>
  );
}

export default Error404;
