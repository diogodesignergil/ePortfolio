import { React, useState } from "react";
import "./about.css";

function About() {
	const [active, setMode] = useState(false);
	const ToggleMode = () => setMode(!active);
	const [ative, setKode] = useState(false);
	const ToggleKode = () => setKode(!ative);
	const [actives, setLode] = useState(false);
	const ToggleLode = () => setLode(!actives);
	// const closeMenu = () => setMode(false);

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
					<div className="card-contianer">
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
					<div className="slide-contianer">
						<div
							className={ative ? "resumo" : "resumo  close"}
							onClick={ToggleMode}
						>
							<h2>Resumo</h2>
							<p>
								Sou designer/programador com alguns conhecimentos na área na
								criação de logos e overlays para streamers de Twitch e YouTube e
								entidades, com Html e Java, CSS e muito mais. Entrei nesta aréa
								pelo qual eu gostou de ser criativo.
							</p>
						</div>
						<div
							className={actives ? "hobby" : "hobby  close"}
							onClick={ToggleKode}
						>
							<h2>Hobby</h2>
							<div className="iconhobby">
								<ul>
									<li>
										<i class="fas fa-photo-video"></i>
										Edição de vídeo e imagem
									</li>
									<li>
										<i class="fas fa-code"></i>
										VS Code Dev
									</li>
									<li>
										<i class="fas fa-palette"></i>Desenhar
									</li>
									<li>
										<i class="fab fa-twitch"></i>Twitch
									</li>
									<li>
										<i class="fab fa-youtube"></i>YouTube
									</li>
									<li>
										<i class="fas fa-book-reader"></i>Ler livros
									</li>
								</ul>
							</div>
						</div>
						<div
							className={actives ? "test" : "test  close"}
							onClick={ToggleLode}
						>
							<h2>Test</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
