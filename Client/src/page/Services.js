import React from "react";
import "./services.css";
import Line from "../components/Line.js";

import BannerLogo from "../asset/img/LogoBanner.png";

import { useTranslation } from "react-i18next";
import ServicesCards from "../components/ServicesCards";

const allServices = [
	{
		id: "1",
		image: BannerLogo,
		title: "Logotipos",
		descrition:
			"Criação de logos personalizados para fins pessoais e empressial, com acabamento para wallpaper, papel timbrado, estampagem e muitos outros...",
		link: "/services/1",
	},
];

function Services() {
	const [t] = useTranslation();

	return (
		<section className="services" data-aos="fade-in">
			<h1>{t("services.title")}</h1>
			<Line />
			<p>{t("services.info")}</p>
			<div className="services-container">
				{allServices.map((servicesStatus) => {
					return (
						<ServicesCards
							key={servicesStatus.id}
							image={servicesStatus.image}
							title={servicesStatus.title}
							descrition={servicesStatus.descrition}
							link={servicesStatus.link}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default Services;
