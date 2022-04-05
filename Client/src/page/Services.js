import React from "react";
import "./services.css";
import Line from "../components/Line.js";

import { useTranslation } from "react-i18next";
import ServicesCards from "../components/ServicesCards";

import { motion } from "framer-motion/dist/framer-motion";

import data from "../data/data.js";

const allServices = data.services;

function Services() {
	const [t] = useTranslation();

	return (
		<motion.section
			className="services"
			initial={{ y: window.innerHeight, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{
				y: window.innerHeight,
				opacity: 0,
				transition: { duration: 0.1 },
			}}
		>
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
		</motion.section>
	);
}

export default Services;
