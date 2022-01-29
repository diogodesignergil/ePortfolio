import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import "./home.css";

function Home() {
  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="static-txt-1">Hello, my name is</div>
          <div className="static-txt-2">Diogo "Reveratel" Gil</div>
          <div className="wrapper">
            <div className="static-txt-3">And I'm a</div>
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
            <a href="asset/img/logo.png" download>
              <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
              >
                <i class="fas fa-download" />
                &nbsp;DOWNLOAD CV
              </Button>
            </a>
            <Link to="/contact">
              <Button
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
              >
                HIRE ME
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
