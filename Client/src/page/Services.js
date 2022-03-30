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
		title: "services.logocard.title",
		descrition: "services.logocard.descrition",
		link: "/services/1",
	},
	{
		id: "2",
		image: "",
		title: "services.overlaycard.title",
		descrition: "services.overlaycard.descrition",
		link: "/services/2",
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
							title={t(servicesStatus.title)}
							descrition={t(servicesStatus.descrition)}
							link={servicesStatus.link}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default Services;
