import { React, useState } from "react";
import "./about.css";

import AOS from "aos";
import "aos/dist/aos.css";

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
	// const closeRed = () => setRed(false);
	// const closeBlue = () => setBlue(false);
	// const closeYellow = () => setYellow(false);

	return (
		<section className="about" id="about">
			<h1>About</h1>
			<div className="line">
				<hr></hr>
				<hr></hr>
				<hr></hr>
			</div>
			<div className="info-contianer">
				<div className="wrapp">
					<div
						className="card-contianer"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
					>
						<img src="asset/img/about_foto.jpg"></img>
						<ul className="info">
							<li>
								<b>Nome:</b> Diogo Oliveira Gil
							</li>
							<li>
								<b>Alcunha:</b> Reveratel
							</li>
							<li>
								<b>Data de Nascimento:</b> 28/08/1993
							</li>
							<li>
								<b>Localização:</b> Lisboa, Portugal
							</li>
							<li>
								<b>Escolaridade:</b> 12º
							</li>
							<li>
								<b>Curso:</b> Design Gráfico
							</li>
						</ul>
					</div>
					<div
						className="slide-contianer"
						data-aos="fade-right"
						data-aos-easing="ease-in-out"
						data-aos-delay="250"
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
										<i class="fas fa-photo-video"></i>
										<br></br>
										<label>Edição de vídeo e imagem</label>
									</li>
									<li>
										<i class="fas fa-code"></i>
										<br></br>
										<label>VS Code Dev</label>
									</li>
									<li>
										<i class="fas fa-palette"></i>
										<br></br>
										<label>Desenhar</label>
									</li>
									<li>
										<i class="fab fa-twitch"></i>
										<br></br>
										<label>Twitch</label>
									</li>
									<li>
										<i class="fab fa-youtube"></i>
										<br></br>
										<label>YouTube</label>
									</li>
									<li>
										<i class="fas fa-book-reader"></i>
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
										<i class="fas fa-comments"></i>
										<br></br>
										<label>Comunicação Interpessoal</label>
									</li>
									<li>
										<i class="fab fa-leanpub"></i>
										<br></br>
										<label>Aprender algo de novo</label>
									</li>
									<li>
										<i class="fas fa-sitemap"></i>
										<br></br>
										<label>Organização das tarefas</label>
									</li>
									<li>
										<i class="fas fa-newspaper"></i>
										<br></br>
										<label>Tentar estar informado</label>
									</li>
									<li>
										<i class="fas fa-inventory"></i>
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
								<div className="progres ps yes" />
								<div className="progres ps yes" />
								<div className="progres ps yes" />
								<div className="progres ps" />
								<div className="progres ps" />
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
								<div className="progres ai yes" />
								<div className="progres ai yes" />
								<div className="progres ai yes" />
								<div className="progres ai" />
								<div className="progres ai" />
							</div>
						</div>
					</div>
					<div className="card premierer">
						<div className="card-skill">
							<h3>Adobe Premierer</h3>
							<p>
								Nível
								<br></br>
								<span>Intermédio</span>
							</p>
							<div className="bar">
								<div className="progres pr yes" />
								<div className="progres pr yes" />
								<div className="progres pr" />
								<div className="progres pr" />
								<div className="progres pr" />
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
								<div className="progres ae yes" />
								<div className="progres ae yes" />
								<div className="progres ae" />
								<div className="progres ae" />
								<div className="progres ae" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
