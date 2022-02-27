import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
// Translation
import { useTranslation } from "react-i18next";

import CV from "../asset/document/CV-DiogoGil.pdf";
import Ring from "../asset/img/ring.png";

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

function Home() {
	const [t] = useTranslation();

	return (
		<section className="home" id="home">
			<div className="max-width">
				<div
					className="home-content"
					data-aos="fade-right"
					data-aos-easing="ease-in-out"
				>
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
							<Button
								className="btns"
								buttonStyle="btn--outline"
								buttonSize="btn--large"
							>
								<i className="fas fa-download" />
								&nbsp;{t("home.download")}
							</Button>
						</a>
						<Link to="/contact">
							<Button
								className="btns"
								buttonStyle="btn--primary"
								buttonSize="btn--large"
							>
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
