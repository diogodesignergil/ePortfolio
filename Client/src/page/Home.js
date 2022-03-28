import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import "./home.css";
// Translation
import { useTranslation } from "react-i18next";

import CV from "../asset/document/CV-DiogoGil.pdf";
import Ring from "../asset/img/ring.png";

function Home() {
	const [t] = useTranslation();

	return (
		<section className="home" id="home">
			<div className="max-width">
				<div className="home-content" data-aos="fade-right">
					<div className="static-txt-1">{t("home.text1")}</div>
					<div className="static-txt-2">Diogo "Reveratel" Gil</div>
					<div className="wrapper">
						<div className="static-txt-3">{t("home.text3")}</div>
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
						<a href={CV} download>
							<Button buttonStyle="btn--outline" buttonSize="btn--large">
								<i className="fas fa-download" />
								&nbsp;{t("home.download")}
							</Button>
						</a>
						<Link to="/contact">
							<Button buttonStyle="btn--primary" buttonSize="btn--large">
								{t("home.hire")}
							</Button>
						</Link>
					</div>
				</div>
			</div>
			<div
				className="ring"
				data-aos="fade-left"
				data-aos-easing="ease-in-out"
				data-aos-delay="250"
			>
				<img src={Ring} />
			</div>
		</section>
	);
}

export default Home;
