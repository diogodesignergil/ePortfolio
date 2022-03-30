import React, { useEffect, useState } from "react";
import Error404 from "./Error404";
import { useParams } from "react-router-dom";
import "./servicespage.css";

import { useTranslation } from "react-i18next";
import Line from "../components/Line.js";

import { Button } from "../components/Button.js";

import FiverrLogo from "../asset/img/fiverrLogo.png";

const services = [
	{
		id: 1,
		title: "servicespage.title",
		info: "Aqui poderá saber os passos à passos como é feito o processo deste serviços e no fim podera requisitar este mesmo serviço.",
		step: [
			{
				number: "01",
				title: "Entrevista:",
				text: "Irei fazer umas pequenas perguntas durante a entrevista à pessoa interessada/o no serviço. Este procedimento server para perceber sobre o produto pedido e poder demonstrar alguma pesquisa.",
				image: "",
			},
			{
				number: "02",
				title: "Pesquisa:",
				text: "Eu faço inúmeras pesquisar ao tema do requisito do cliente, para essa mesma pessoa ter noção de uma ideia que poderá vir.",
				image: "",
			},
			{
				number: "03",
				title: "Esboços do Logo:",
				text: "O esboço é feito a mão e quando tiver o suficiente mostrou o resultado e pode haver ainda mais algumas mais a para frente. Nesta parte quem escolhe qual dos esboços é o cliente para avançar para o formado grande e por fim para formato digital.",
				image: "",
			},
			{
				number: "04",
				title: "Estudo das cores:",
				text: "Depois de passar os esboço para digital, é feito uma estudo de cores (caso o cliente não tiver a ideia das cores). Expermento com fundo B/W, Red, Blue, Yellow, Green para não haver problemas com essas cores que são usados.",
				image: "",
			},
			{
				number: "05",
				title: "Proporção:",
				text: "Este passo exites para fazer as medidas adquadas para o formato web (nomeadamente: Facebook, Instagram, TikTok e muitos outros...), wallpaper de grandes formatos, impressão e muitos formatos.",
				image: "",
			},
		],
	},
	{
		id: 2,
		title: "servicespage.title",
		step: [{ texto: "Teste" }, { texto: "Teste2" }],
	},
	{
		id: 3,
		title: "servicespage.title",
		step: [{ texto: "Teste" }, { texto: "Teste2" }, { texto: "Teste3" }],
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
					<p className="info">{getServiceData.info}</p>
					{getServiceData.step?.map((step) => {
						return (
							<div className="step">
								<span>{step.number}</span>
								<div className="text">
									<h2>{step.title}</h2>
									<p>{step.text}</p>
								</div>
								<img src={step.image} />
							</div>
						);
					})}
					<Button buttonStyle="btn--fiverr" buttonSize="btn--large">
						<img src={FiverrLogo} />
					</Button>
				</section>
			) : (
				<Error404 />
			)}
		</div>
	);
}

export default ServicesPage;
