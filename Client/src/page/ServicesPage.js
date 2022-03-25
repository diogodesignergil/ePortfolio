import React from "react";
import Error404 from "./Error404";
import { useParams } from "react-router-dom";

const services = [{ id: 1 }, { id: 2 }, { id: 3 }];

function ServicesPage() {
	const { id } = useParams();

	function checkArray(id) {
		return services.some(function (service) {
			return service.id === id;
		});
	}

	return (
		<div>
			{checkArray(parseInt(id)) ? <div>Service Page {id}</div> : <Error404 />}
		</div>
	);
}

export default ServicesPage;
