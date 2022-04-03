import { React, useState } from "react";
import "./about.css";

import { useTranslation } from "react-i18next";

import Line from "../components/Line";

import Foto from "../asset/img/foto.jpg";

import SkillCards from "../components/SkillCards.js";
import LangCards from "../components/LangCards.js";
import ExpCards from "../components/ExpCards";

import { motion } from "framer-motion/dist/framer-motion";

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

	const allSkill = [
		{
			id: "1",
			style: "photoshop",
			title: "Adobe Photoshop",
			subtitle: "",
			textLevel: "about.section2.intermplus",
			level: "intermplus",
		},
		{
			id: "2",
			style: "illustrator",
			title: "Adobe Illustrator",
			subtitle: "",
			textLevel: "about.section2.intermplus",
			level: "intermplus",
		},
		{
			id: "3",
			style: "premierer",
			title: "Adobe Premierer Pro",
			subtitle: "",
			textLevel: "about.section2.interm",
			level: "interm",
		},
		{
			id: "4",
			style: "aftereffect",
			title: "Adobe After Effect",
			subtitle: "",
			textLevel: "about.section2.interm",
			level: "interm",
		},
		{
			id: "5",
			style: "microOffice",
			title: "Microsoft Office",
			subtitle: "(Word, Excel, PowerPoint)",
			textLevel: "about.section2.adven",
			level: "adven",
		},
		{
			id: "6",
			style: "html",
			title: "Html",
			subtitle: "",
			textLevel: "about.section2.adven",
			level: "adven",
		},
		{
			id: "7",
			style: "css",
			title: "Css",
			subtitle: "",
			textLevel: "about.section2.adven",
			level: "adven",
		},
		{
			id: "8",
			style: "js",
			title: "Javascript",
			subtitle: "",
			textLevel: "about.section2.interm",
			level: "interm",
		},
		{
			id: "9",
			style: "php",
			title: "PHP",
			subtitle: "",
			textLevel: "about.section2.intermplus",
			level: "intermplus",
		},
		{
			id: "10",
			style: "react",
			title: "React.js",
			subtitle: "",
			textLevel: "about.section2.basic",
			level: "basic",
		},
		{
			id: "11",
			style: "cc",
			title: "C++ / C#",
			subtitle: "",
			textLevel: "about.section2.intermplus",
			level: "intermplus",
		},
		{
			id: "12",
			style: "java",
			title: "Java",
			subtitle: "",
			textLevel: "about.section2.intermplus",
			level: "intermplus",
		},
	];

	const allLang = [
		{
			id: "1",
			style: "portugal",
			title: "about.section3.portugal.title",
			speak: "about.section3.portugal.speakPer",
			write: "about.section3.portugal.writePer",
		},
		{
			id: "2",
			style: "english",
			title: "about.section3.english.title",
			speak: "about.section3.english.speakPer",
			write: "about.section3.english.writePer",
		},
		{
			id: "3",
			style: "france",
			title: "about.section3.france.title",
			speak: "about.section3.france.speakPer",
			write: "about.section3.france.writePer",
		},
	];

	const allExp = [
		{
			id: "1",
			title: "about.section4.card1.title",
			date: "09/2009-03/2013",
			local: "about.section4.card1.local",
			body: "about.section4.card1.body",
			year: "2009",
		},
		{
			id: "2",
			title: "about.section4.card2.title",
			date: "10/2014-12/2014",
			local: "about.section4.card2.local",
			body: "about.section4.card2.body",
			year: "2014",
		},
		{
			id: "3",
			title: "about.section4.card3.title",
			date: "04/2015-09/2015",
			local: "about.section4.card3.local",
			body: "about.section4.card3.body",
			year: "2015",
		},
		{
			id: "4",
			title: "about.section4.card4.title",
			date: "04/2016-12/2012",
			local: "about.section4.card4.local",
			body: "about.section4.card4.body",
			year: "2016",
		},
		{
			id: "5",
			title: "about.section4.card5.title",
			date: "10/2017-06/2018",
			local: "about.section4.card6.local",
			body: "about.section4.card6.body",
			year: "2017",
		},
		{
			id: "6",
			title: "about.section4.card6.title",
			date: "07/2018-09/2019",
			local: "about.section4.card6.local",
			body: "about.section4.card6.body",
			year: "2018",
		},
		{
			id: "7",
			title: "about.section4.card7.title",
			date: "01/2020-09/2020",
			local: "about.section4.card7.local",
			body: "about.section4.card7.body",
			year: "2018",
		},
		{
			id: "8",
			title: "about.section4.card8.title",
			date: "09/2021-12/2021",
			local: "about.section4.card8.local",
			body: "about.section4.card8.body",
			year: "2021",
		},
	];

	return (
		<motion.section
			className="about"
			id="about"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<h1>{t("about.section1.title")}</h1>
			<Line />
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
				<Line />
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
				<Line />
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
				<Line />
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
		</motion.section>
	);
}

export default About;
