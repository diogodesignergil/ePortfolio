import React from "react";

import "./expCards.css";

const ExpCards = ({ title, date, local, body, year }) => {
	return (
		<div className="card-experiences">
			<div className="exper-info">
				<h3>{title}</h3>
				<data>{date}</data>
				<br />
				<label>{local}</label>
				<p>{body}</p>
			</div>
			<div className="time-line">
				<div className="year">
					<data>{year}</data>
				</div>
				<hr></hr>
			</div>
		</div>
	);
};

export default ExpCards;
