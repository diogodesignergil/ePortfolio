import { React, useState } from "react";
import "./about.css";

import { useTranslation } from "react-i18next";

import Foto from "../../../../../asset/img/foto.jpg";

import SkillCards from "../../../../skillcards/SkillCards.js";
import LangCards from "../../../../langcard/LangCards.js";
import ExpCards from "../../../../expcards/ExpCards";

import data from "../../../../../data/data";

const allSkill = data.skill;
const allLang = data.lang;
const allExp = data.exp;

function About() {
  const [red, setRed] = useState(false);
  const ToggleRed = () => setRed(!red) + setBlue(false) + setYellow(false);

  const [red2, setRed2] = useState(true);
  const ToggleRed2 = () => setRed2(true) + setBlue2(false) + setYellow2(false);

  const [blue, setBlue] = useState(false);
  const ToggleBlue = () => setBlue(!blue) + setRed(false) + setYellow(false);

  const [blue2, setBlue2] = useState(false);
  const ToggleBlue2 = () => setBlue2(true) + setRed2(false) + setYellow2(false);

  const [yellow, setYellow] = useState(false);
  const ToggleYellow = () =>
    setYellow(!yellow) + setRed(false) + setBlue(false);

  const [yellow2, setYellow2] = useState(false);
  const ToggleYellow2 = () =>
    setYellow2(true) + setRed2(false) + setBlue2(false);

  const [t] = useTranslation();

  return (
    <section className="about" id="about">
      <h1>{t("about.section1.title")}</h1>
      <div className="info-contianer">
        <div className="wrapp">
          <div className="card-contianer">
            <img src={Foto} alt="" />
            <ul className="info">
              <li>
                <b>{t("about.section1.name")}</b> Diogo Oliveira Gil
              </li>
              <li>
                <b>{t("about.section1.nickname")}</b> Reveratel
              </li>
              <li>
                <b>{t("about.section1.birth")}</b> 28/08/1993
              </li>
              <li>
                <b>{t("about.section1.local1")}</b> {t("about.section1.local2")}
              </li>
              <li>
                <b>{t("about.section1.education1")}</b>{" "}
                {t("about.section1.education2")}
              </li>
              <li>
                <b>{t("about.section1.course1")}</b>{" "}
                {t("about.section1.course2")}
              </li>
            </ul>
          </div>
          <div className="slide-contianer">
            <div
              className={red ? "aboutme" : "aboutme  close"}
              onClick={ToggleRed}
            >
              <h2>{t("about.section1.slide1.title")}</h2>
              <p>
                {t("about.section1.slide1.text1")}
                <br></br>
                {t("about.section1.slide1.text2")}
                <br></br>
                {t("about.section1.slide1.text3")}
              </p>
            </div>
            <div
              className={blue ? "hobby" : "hobby  close"}
              onClick={ToggleBlue}
            >
              <h2>{t("about.section1.slide2.title")}</h2>

              <div className="iconhobby">
                <ul>
                  <li>
                    <i className="fas fa-photo-video" />
                    <br></br>
                    <label>{t("about.section1.slide2.icons.video")}</label>
                  </li>
                  <li>
                    <i className="fas fa-code" />
                    <br></br>
                    <label>{t("about.section1.slide2.icons.code")}</label>
                  </li>
                  <li>
                    <i className="fas fa-palette" />
                    <br></br>
                    <label>{t("about.section1.slide2.icons.art")}</label>
                  </li>
                  <li>
                    <i className="fas fa-headset" />
                    <br></br>
                    <label>{t("about.section1.slide2.icons.live")}</label>
                  </li>
                  <li>
                    <i className="fas fa-book-reader" />
                    <br></br>
                    <label>{t("about.section1.slide2.icons.read")}</label>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={yellow ? "comunication" : "comunication  close"}
              onClick={ToggleYellow}
            >
              <h2>{t("about.section1.slide3.title")}</h2>
              <div className="iconcom">
                <ul>
                  <li>
                    <i className="fas fa-users" />
                    <br></br>
                    <label>{t("about.section1.slide3.icons.team")}</label>
                  </li>
                  <li>
                    <i className="fas fa-comments" />
                    <br></br>
                    <label>{t("about.section1.slide3.icons.cominter")}</label>
                  </li>
                  <li>
                    <i className="fab fa-leanpub" />
                    <br></br>
                    <label>{t("about.section1.slide3.icons.learn")}</label>
                  </li>
                  <li>
                    <i className="fas fa-sitemap" />
                    <br></br>
                    <label>{t("about.section1.slide3.icons.todo")}</label>
                  </li>
                  <li>
                    <i className="fas fa-inventory" />
                    <br></br>
                    <label>{t("about.section1.slide3.icons.space")}</label>
                  </li>
                  <li>
                    <i className="fas fa-newspaper" />
                    <br></br>
                    <label>{t("about.section1.slide3.icons.news")}</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="slide-contianer2">
            <div
              className={red2 ? "aboutme" : "aboutme  close"}
              onClick={ToggleRed2}
            >
              <h2>{t("about.section1.slide1.title")}</h2>
              <p>
                {t("about.section1.slide1.text1")}
                <br></br>
                {t("about.section1.slide1.text2")}
                <br></br>
                {t("about.section1.slide1.text3")}
              </p>
            </div>
            <div
              className={blue2 ? "hobby" : "hobby  close"}
              onClick={ToggleBlue2}
            >
              <h2>{t("about.section1.slide2.title")}</h2>

              <div className="iconhobby">
                <ul>
                  <li>
                    <i className="fas fa-photo-video" />
                    <br></br>
                    <label>{t("about.section1.slide2.icons.video")}</label>
                  </li>
                  <li>
                    <i className="fas fa-code" />
                    <br></br>
                    <label>{t("about.section1.slide2.icons.code")}</label>
                  </li>
                  <li>
                    <i className="fas fa-palette" />
                    <br></br>
                    <label>{t("about.section1.slide2.icons.art")}</label>
                  </li>
                  <li>
                    <i className="fas fa-headset" />
                    <br></br>
                    <label>{t("about.section1.slide2.icons.live")}</label>
                  </li>
                  <li>
                    <i className="fas fa-book-reader" />
                    <br></br>
                    <label>{t("about.section1.slide2.icons.read")}</label>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={yellow2 ? "comunication" : "comunication  close"}
              onClick={ToggleYellow2}
            >
              <h2>{t("about.section1.slide3.title")}</h2>
              <div className="iconcom">
                <ul>
                  <li>
                    <i className="fas fa-users" />
                    <br></br>
                    <label>{t("about.section1.slide3.icons.team")}</label>
                  </li>
                  <li>
                    <i className="fas fa-comments" />
                    <br></br>
                    <label>{t("about.section1.slide3.icons.cominter")}</label>
                  </li>
                  <li>
                    <i className="fab fa-leanpub" />
                    <br></br>
                    <label>{t("about.section1.slide3.icons.learn")}</label>
                  </li>
                  <li>
                    <i className="fas fa-sitemap" />
                    <br></br>
                    <label>{t("about.section1.slide3.icons.todo")}</label>
                  </li>
                  <li>
                    <i className="fas fa-inventory" />
                    <br></br>
                    <label>{t("about.section1.slide3.icons.space")}</label>
                  </li>
                  <li>
                    <i className="fas fa-newspaper" />
                    <br></br>
                    <label>{t("about.section1.slide3.icons.news")}</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Skill */}
      <div className="skill-contianer">
        <h2>{t("about.section2.title")}</h2>
        <div className="cards-contianer">
          {allSkill.map((skillStatus) => {
            return (
              <SkillCards
                key={skillStatus.id}
                cardStyle={skillStatus.style}
                title={skillStatus.title}
                subtitle={skillStatus.subtitle}
                level={t(skillStatus.textLevel)}
                cardLevel={skillStatus.level}
              />
            );
          })}
        </div>
      </div>
      {/* Language */}
      <div className="language">
        <h2>{t("about.section3.title")}</h2>
        <div className="cards-contianer">
          {allLang.map((langStatus) => {
            return (
              <LangCards
                key={langStatus.id}
                langStyle={langStatus.style}
                title={t(langStatus.title)}
                speakPer={t(langStatus.speak)}
                writePer={t(langStatus.write)}
              />
            );
          })}
        </div>
      </div>
      {/* Experiances */}
      <div className="timeline-container">
        <h2>{t("about.section4.title")}</h2>
        <div className="wrapper-time">
          <div className="expericens-contianer">
            {allExp.map((ExpStatus) => {
              return (
                <ExpCards
                  key={ExpStatus.id}
                  title={t(ExpStatus.title)}
                  date={ExpStatus.date}
                  local={t(ExpStatus.local)}
                  body={t(ExpStatus.body)}
                  year={ExpStatus.year}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
