import { React, useState } from "react";
import "./about.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useTranslation } from "react-i18next";
import Line from "../components/Line";

import Foto from "../asset/img/foto.jpg";

AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
	initClassName: "aos-init", // class applied after initialization
	animatedClassName: "aos-animate", // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: "ease", // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

function About() {
	const [red, setRed] = useState(false);
	const ToggleRed = () => setRed(!red) + setBlue(false) + setYellow(false);
	const [blue, setBlue] = useState(false);
	const ToggleBlue = () => setBlue(!blue) + setRed(false) + setYellow(false);
	const [yellow, setYellow] = useState(false);
	const ToggleYellow = () =>
		setYellow(!yellow) + setRed(false) + setBlue(false);

	const [t] = useTranslation();

	return (
		<section className="about" id="about">
			<h1>{t("about.section1.title")}</h1>
			<Line />
			<div className="info-contianer">
				<div className="wrapp">
					<div
						className="card-contianer"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
					>
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
					<div
						className="slide-contianer"
						data-aos="fade-right"
						data-aos-easing="ease-in-out"
						data-aos-delay="300"
					>
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
				</div>
			</div>
			<div className="skill-contianer">
				<h2>Conhecimento dos Programas</h2>
				<Line />
				<div className="cards-contianer">
					<div className="card photoshop">
						<div className="card-skill">
							<h3>Adobe Photoshop</h3>
							<p>
								Nível
								<br></br>
								<span>Intermédio +</span>
							</p>
							<div className="bar">
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres " />
								<div className="progres " />
							</div>
						</div>
					</div>
					<div className="card illustrator">
						<div className="card-skill">
							<h3>Adobe Illustrator</h3>
							<p>
								Nível
								<br></br>
								<span>Intermédio +</span>
							</p>
							<div className="bar">
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres " />
								<div className="progres " />
							</div>
						</div>
					</div>
					<div className="card premierer">
						<div className="card-skill">
							<h3>Adobe Premierer Pro</h3>
							<p>
								Nível
								<br></br>
								<span>Intermédio</span>
							</p>
							<div className="bar">
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres" />
								<div className="progres" />
								<div className="progres" />
							</div>
						</div>
					</div>
					<div className="card aftereffect">
						<div className="card-skill">
							<h3>Adobe After Effect</h3>
							<p>
								Nível
								<br></br>
								<span>Intermédio</span>
							</p>
							<div className="bar">
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres" />
								<div className="progres" />
								<div className="progres" />
							</div>
						</div>
					</div>
					<div className="card microOffice">
						<div className="card-skill">
							<h3>
								Microsoft Office<br></br>
								<label>(Word, Excel, PowerPoint)</label>
							</h3>
							<p>
								Nível
								<br></br>
								<span>Avançado</span>
							</p>
							<div className="bar">
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres" />
							</div>
						</div>
					</div>
					<div className="card html">
						<div className="card-skill">
							<h3>Html</h3>
							<p>
								Nível
								<br></br>
								<span>Avançado</span>
							</p>
							<div className="bar">
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres" />
							</div>
						</div>
					</div>
					<div className="card css">
						<div className="card-skill">
							<h3>Css</h3>
							<p>
								Nível
								<br></br>
								<span>Avançado</span>
							</p>
							<div className="bar">
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres" />
							</div>
						</div>
					</div>
					<div className="card js">
						<div className="card-skill">
							<h3>Javascript</h3>
							<p>
								Nível
								<br></br>
								<span>Intermédio</span>
							</p>
							<div className="bar">
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres" />
								<div className="progres" />
								<div className="progres" />
							</div>
						</div>
					</div>
					<div className="card php">
						<div className="card-skill">
							<h3>PHP</h3>
							<p>
								Nível
								<br></br>
								<span>Intermédio +</span>
							</p>
							<div className="bar">
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres" />
								<div className="progres" />
							</div>
						</div>
					</div>
					<div className="card react">
						<div className="card-skill">
							<h3>ReactJs</h3>
							<p>
								Nível
								<br></br>
								<span>Básico</span>
							</p>
							<div className="bar">
								<div className="progres yes" />
								<div className="progres" />
								<div className="progres" />
								<div className="progres" />
								<div className="progres" />
							</div>
						</div>
					</div>
					<div className="card cc">
						<div className="card-skill">
							<h3>C++ / C#</h3>
							<p>
								Nível
								<br></br>
								<span>Intermédio +</span>
							</p>
							<div className="bar">
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres" />
								<div className="progres" />
							</div>
						</div>
					</div>
					<div className="card java">
						<div className="card-skill">
							<h3>Java</h3>
							<p>
								Nível
								<br></br>
								<span>Intermédio +</span>
							</p>
							<div className="bar">
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres yes" />
								<div className="progres" />
								<div className="progres" />
							</div>
						</div>
					</div>
				</div>

				<div className="language">
					<h2>Línguagem</h2>
					<Line />
					<div className="cards-contianer">
						<div className="card-language portugal">
							<div className="card-lang">
								<h3>Português</h3>
								<div className="card-progress">
									<div className="overflow">
										<div className="circle-progress fala">
											<div>
												<span>Nativo</span>
												<br></br>
												<label>Fala</label>
											</div>
										</div>
									</div>
									<div className="overflow">
										<div className="circle-progress escrita">
											<div>
												<span>Nativo</span>
												<br></br>
												<label>Escrita</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card-language english">
							<div className="card-lang">
								<h3>Inglês</h3>
								<div className="card-progress">
									<div className="overflow">
										<div className="circle-progress fala">
											<div>
												<span>74%</span>
												<br></br>
												<label>Fala</label>
											</div>
										</div>
									</div>
									<div className="overflow">
										<div className="circle-progress escrita">
											<div>
												<span>78%</span>
												<br></br>
												<label>Escrita</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card-language france">
							<div className="card-lang">
								<h3>Francês</h3>
								<div className="card-progress">
									<div className="overflow">
										<div className="circle-progress fala">
											<div>
												<span>8%</span>
												<br></br>
												<label>Fala</label>
											</div>
										</div>
									</div>
									<div className="overflow">
										<div className="circle-progress escrita">
											<div>
												<span>10%</span>
												<br></br>
												<label>Escrita</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="timeline-container">
				<h2>Experiência</h2>
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
