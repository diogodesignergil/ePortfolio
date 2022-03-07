import React from "react";
import "./services.css";
import Line from "../components/Line.js";
import { Link } from "react-router-dom";

function Services() {
  return (
    <section className="services" data-aos="fade-in">
      <h1>Services</h1>
      <Line />
      <p>
        Como designer, eu disponibilizo serviços que podem que encontrem em
        baixo e poderão requisitar também.
      </p>
      <div className="services-container">
        <div className="services-card">
          <div className="card-header">{/* Image */}</div>
          <div className="card-body">
            <h2>Logotipos</h2>
            <p>
              Criação de logos personalizados para fins pessoais e empressial,
              com acabamento para wallpaper, papel timbrado, estampagem e muitos
              outros...
            </p>
          </div>
          <div className="card-footer">
            <label>Saber mais </label>
            <i className="far fa-angle-right" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
