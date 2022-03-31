import React, { useEffect, useState } from "react";
import Error404 from "./Error404";
import { useParams } from "react-router-dom";
import "./servicespage.css";

// Tradutor
import { useTranslation } from "react-i18next";

// Line
import Line from "../components/Line.js";

// Button
import { Button } from "../components/Button.js";
import FiverrLogo from "../asset/img/fiverrLogo.png";

// Icons
import Interview from "../asset/img/interview.png";
import Search from "../asset/img/search.png";
import Draw from "../asset/img/draw.png";
import Color from "../asset/img/color.png";
import Proportion from "../asset/img/proportion.png";
import Zip from "../asset/img/zip.png";
import Display from "../asset/img/display.png";
import BG from "../asset/img/BGOverlay.png";
import Webcam from "../asset/img/webcam.png";
import Alert from "../asset/img/alert.png";
import Stinger from "../asset/img/stinger.png";
import Test from "../asset/img/test.png";
import Chat from "../asset/img/chat.png";

const services = [
	{
		id: 1,
		title: "servicespage.logo.title",
		info: "servicespage.info",
		info2: "",
		step: [
			{
				number: "01",
				title: "servicespage.logo.step1.title",
				text: "servicespage.logo.step1.text",
				image: Interview,
			},
			{
				number: "02",
				title: "servicespage.logo.step2.title",
				text: "servicespage.logo.step2.text",
				image: Search,
			},
			{
				number: "03",
				title: "servicespage.logo.step3.title",
				text: "servicespage.logo.step3.text",
				image: Draw,
			},
			{
				number: "04",
				title: "servicespage.logo.step4.title",
				text: "servicespage.logo.step4.text",
				image: Color,
			},
			{
				number: "05",
				title: "servicespage.logo.step5.title",
				text: "servicespage.logo.step5.text",
				image: Proportion,
			},
			{
				number: "06",
				title: "servicespage.logo.step6.title",
				text: "servicespage.logo.step6.text",
				image: Zip,
			},
		],
	},
	{
		id: 2,
		title: "servicespage.overlay.title",
		info: "servicespage.overlay.info",
		info2: "servicespage.overlay.info2",
		step: [
			{
				number: "01",
				title: "servicespage.overlay.step1.title",
				text: "servicespage.overlay.step1.text",
				image: Interview,
			},
			{
				number: "02",
				title: "servicespage.overlay.step2.title",
				text: "servicespage.overlay.step2.text",
				image: Display,
			},
			{
				number: "03",
				title: "servicespage.overlay.step3.title",
				text: "servicespage.overlay.step3.text",
				image: BG,
			},
			{
				number: "04",
				title: "servicespage.overlay.step4.title",
				text: "servicespage.overlay.step4.text",
				image: Webcam,
			},
			{
				number: "05",
				title: "servicespage.overlay.step5.title",
				text: "servicespage.overlay.step5.text",
				image: Alert,
			},
			{
				number: "06",
				title: "servicespage.overlay.step6.title",
				text: "servicespage.overlay.step6.text",
				image: Stinger,
			},
			{
				number: "07",
				title: "servicespage.overlay.step7.title",
				text: "servicespage.overlay.step7.text",
				image: Chat,
			},
			{
				number: "08",
				title: "servicespage.overlay.step8.title",
				text: "servicespage.overlay.step8.text",
				image: Test,
			},
			{
				number: "09",
				title: "servicespage.overlay.step9.title",
				text: "servicespage.overlay.step9.text",
				image: Zip,
			},
		],
	},
];

function ServicesPage() {
	const { id } = useParams();
	const [getServiceData, setService] = useState({});

	function checkArray(id) {
		return services.some(function (service) {
			return service.id === id;
		});
	}

	function getService(id) {
		return services.find(function (service) {
			return service.id === parseInt(id);
		});
	}

	const [t] = useTranslation();

	useEffect(() => {
		setService(getService(id));
	}, []);

	return (
		<div>
			{checkArray(parseInt(id)) ? (
				<section className="servicepage" data-aos="fade-in">
					<h1>{t(getServiceData.title)}</h1>
					<Line />
					<p className="info">
						{t(getServiceData.info)}
						<br></br>
						<span className="info2">{t(getServiceData.info2)}</span>
					</p>

					{getServiceData.step?.map((step) => {
						return (
							<div className="step">
								<span>{step.number}</span>
								<div className="text">
									<h2>{t(step.title)}</h2>
									<p>{t(step.text)}</p>
								</div>
								<img src={step.image} alt="" />
							</div>
						);
					})}
					<Button buttonStyle="btn--fiverr" buttonSize="btn--large">
						<img src={FiverrLogo} alt="" />
					</Button>
				</section>
			) : (
				<Error404 />
			)}
		</div>
	);
}

export default ServicesPage;
