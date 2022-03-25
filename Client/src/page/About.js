import { React, useState } from "react";
import "./about.css";
import "../components/LangCards.css";

import { useTranslation } from "react-i18next";

import Line from "../components/Line";

import Foto from "../asset/img/foto.jpg";

import SkillCards from "../components/SkillCards.js";
import LangCards from "../components/LangCards.js";

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

	return (
		<section className="about" id="about" data-aos="fade-in">
			<h1>{t("about.section1.title")}</h1>
			<Line />
			<div className="info-contianer">
				<div className="wrapp">
					<div className="card-contianer">
						<img src={Foto}></img>
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
							<h2>Sobre mim</h2>
							<p>
								Sou designer/programador com alguns conhecimentos na área na
								criação de logos e overlays para streamers de Twitch e YouTube e
								entidades, com Html e Java, CSS e muito mais. Entrei nesta aréa
								pelo qual eu gostou de ser criativo.
							</p>
						</div>
						<div
							className={blue ? "hobby" : "hobby  close"}
							onClick={ToggleBlue}
						>
							<h2>Hobby</h2>
							<div className="iconhobby">
								<ul>
									<li>
										<i className="fas fa-photo-video" />
										<br></br>
										<label>Edição de vídeo e imagem</label>
									</li>
									<li>
										<i className="fas fa-code" />
										<br></br>
										<label>VS Code Dev</label>
									</li>
									<li>
										<i className="fas fa-palette" />
										<br></br>
										<label>Desenhar</label>
									</li>
									<li>
										<i className="fab fa-twitch" />
										<br></br>
										<label>Twitch</label>
									</li>
									<li>
										<i className="fab fa-youtube" />
										<br></br>
										<label>YouTube</label>
									</li>
									<li>
										<i className="fas fa-book-reader" />
										<br></br>
										<label>Ler livros</label>
									</li>
								</ul>
							</div>
						</div>
						<div
							className={yellow ? "comunication" : "comunication  close"}
							onClick={ToggleYellow}
						>
							<h2>Comunicação</h2>
							<div className="iconcom">
								<ul>
									<li>
										<i className="fas fa-comments" />
										<br></br>
										<label>Comunicação Interpessoal</label>
									</li>
									<li>
										<i className="fab fa-leanpub" />
										<br></br>
										<label>Aprender algo de novo</label>
									</li>
									<li>
										<i className="fas fa-sitemap" />
										<br></br>
										<label>Organização das tarefas</label>
									</li>
									<li>
										<i className="fas fa-newspaper" />
										<br></br>
										<label>Tentar estar informado</label>
									</li>
									<li>
										<i className="fas fa-inventory" />
										<br></br>
										<label>Organização do espaço</label>
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
							<h2>Sobre mim</h2>
							<p>
								Sou designer/programador com alguns conhecimentos na área na
								criação de logos e overlays para streamers de Twitch e YouTube e
								entidades, com Html e Java, CSS e muito mais. Entrei nesta aréa
								pelo qual eu gostou de ser criativo.
							</p>
						</div>
						<div
							className={blue2 ? "hobby" : "hobby  close"}
							onClick={ToggleBlue2}
						>
							<h2>Hobby</h2>
							<div className="iconhobby">
								<ul>
									<li>
										<i className="fas fa-photo-video" />
										<br></br>
										<label>Edição de vídeo e imagem</label>
									</li>
									<li>
										<i className="fas fa-code" />
										<br></br>
										<label>VS Code Dev</label>
									</li>
									<li>
										<i className="fas fa-palette" />
										<br></br>
										<label>Desenhar</label>
									</li>
									<li>
										<i className="fab fa-twitch" />
										<br></br>
										<label>Twitch</label>
									</li>
									<li>
										<i className="fab fa-youtube" />
										<br></br>
										<label>YouTube</label>
									</li>
									<li>
										<i className="fas fa-book-reader" />
										<br></br>
										<label>Ler livros</label>
									</li>
								</ul>
							</div>
						</div>
						<div
							className={yellow2 ? "comunication" : "comunication  close"}
							onClick={ToggleYellow2}
						>
							<h2>Comunicação</h2>
							<div className="iconcom">
								<ul>
									<li>
										<i className="fas fa-comments" />
										<br></br>
										<label>Comunicação Interpessoal</label>
									</li>
									<li>
										<i className="fab fa-leanpub" />
										<br></br>
										<label>Aprender algo de novo</label>
									</li>
									<li>
										<i className="fas fa-sitemap" />
										<br></br>
										<label>Organização das tarefas</label>
									</li>
									<li>
										<i className="fas fa-newspaper" />
										<br></br>
										<label>Tentar estar informado</label>
									</li>
									<li>
										<i className="fas fa-inventory" />
										<br></br>
										<label>Organização do espaço</label>
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
				<h2>Línguagem</h2>
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
			<div className="timeline-container">
				<h2>Experiência Profissional</h2>
				<Line />
				<div className="wrapper-time">
					<div className="expericens-contianer">
						<div className="card-experiences">
							<div className="exper-info">
								<h3>Design Gráfico</h3>
								<data>09/2009 - 03/2013</data>
								<br />
								<label>Escola Sec. Padre António Vieira</label>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
									scelerisque lacus euismod nulla vulputate efficitur.
									Pellentesque ultricies in dui eget dignissim. Donec malesuada
									dictum quam vitae convallis. Integer non mi eget sapien cursus
									interdum eu ac justo. Cras in egestas mauris, quis condimentum
									purus. Cras posuere ac ipsum eget auctor. Nam ultrices, nulla
									a bibendum tempor, leo ante sollicitudin nulla, at ornare
									mauris odio sed lorem. Pellentesque nec nisi nunc.
								</p>
							</div>
							<div className="time-line">
								<div className="year">
									<data>2013</data>
								</div>
								<hr></hr>
							</div>
						</div>

						<div className="card-experiences">
							<div className="exper-info">
								<h3>Design Gráfico</h3>
								<data>09/2009 - 03/2013</data>
								<br />
								<label>Escola Sec. Padre António Vieira</label>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
									scelerisque lacus euismod nulla vulputate efficitur.
									Pellentesque ultricies in dui eget dignissim. Donec malesuada
									dictum quam vitae convallis. Integer non mi eget sapien cursus
									interdum eu ac justo. Cras in egestas mauris, quis condimentum
									purus. Cras posuere ac ipsum eget auctor. Nam ultrices, nulla
									a bibendum tempor, leo ante sollicitudin nulla, at ornare
									mauris odio sed lorem. Pellentesque nec nisi nunc.
								</p>
							</div>
							<div className="time-line">
								<div className="year">
									<data>2014</data>
								</div>
								<hr></hr>
							</div>
						</div>

						<div className="card-experiences">
							<div className="exper-info">
								<h3>Design Gráfico</h3>
								<data>09/2009 - 03/2013</data>
								<br />
								<label>Escola Sec. Padre António Vieira</label>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
									scelerisque lacus euismod nulla vulputate efficitur.
									Pellentesque ultricies in dui eget dignissim. Donec malesuada
									dictum quam vitae convallis. Integer non mi eget sapien cursus
									interdum eu ac justo. Cras in egestas mauris, quis condimentum
									purus. Cras posuere ac ipsum eget auctor. Nam ultrices, nulla
									a bibendum tempor, leo ante sollicitudin nulla, at ornare
									mauris odio sed lorem. Pellentesque nec nisi nunc.
								</p>
							</div>
							<div className="time-line">
								<div className="year">
									<data>2015</data>
								</div>
								<hr></hr>
							</div>
						</div>

						<div className="card-experiences">
							<div className="exper-info">
								<h3>Design Gráfico</h3>
								<data>09/2009 - 03/2013</data>
								<br />
								<label>Escola Sec. Padre António Vieira</label>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
									scelerisque lacus euismod nulla vulputate efficitur.
									Pellentesque ultricies in dui eget dignissim. Donec malesuada
									dictum quam vitae convallis. Integer non mi eget sapien cursus
									interdum eu ac justo. Cras in egestas mauris, quis condimentum
									purus. Cras posuere ac ipsum eget auctor. Nam ultrices, nulla
									a bibendum tempor, leo ante sollicitudin nulla, at ornare
									mauris odio sed lorem. Pellentesque nec nisi nunc.
								</p>
							</div>
							<div className="time-line">
								<div className="year">
									<data>2016</data>
								</div>
								<hr></hr>
							</div>
						</div>

						<div className="card-experiences">
							<div className="exper-info">
								<h3>Design Gráfico</h3>
								<data>09/2009 - 03/2013</data>
								<br />
								<label>Escola Sec. Padre António Vieira</label>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
									scelerisque lacus euismod nulla vulputate efficitur.
									Pellentesque ultricies in dui eget dignissim. Donec malesuada
									dictum quam vitae convallis. Integer non mi eget sapien cursus
									interdum eu ac justo. Cras in egestas mauris, quis condimentum
									purus. Cras posuere ac ipsum eget auctor. Nam ultrices, nulla
									a bibendum tempor, leo ante sollicitudin nulla, at ornare
									mauris odio sed lorem. Pellentesque nec nisi nunc.
								</p>
							</div>
							<div className="time-line">
								<div className="year">
									<data>2017</data>
								</div>
								<hr></hr>
							</div>
						</div>

						<div className="card-experiences">
							<div className="exper-info">
								<h3>Design Gráfico</h3>
								<data>09/2009 - 03/2013</data>
								<br />
								<label>Escola Sec. Padre António Vieira</label>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
									scelerisque lacus euismod nulla vulputate efficitur.
									Pellentesque ultricies in dui eget dignissim. Donec malesuada
									dictum quam vitae convallis. Integer non mi eget sapien cursus
									interdum eu ac justo. Cras in egestas mauris, quis condimentum
									purus. Cras posuere ac ipsum eget auctor. Nam ultrices, nulla
									a bibendum tempor, leo ante sollicitudin nulla, at ornare
									mauris odio sed lorem. Pellentesque nec nisi nunc.
								</p>
							</div>
							<div className="time-line">
								<div className="year">
									<data>2018</data>
								</div>
								<hr></hr>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
