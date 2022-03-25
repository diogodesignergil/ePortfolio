import React from "react";

import { useTranslation } from "react-i18next";
import SkillCards from "./SkillCards";

const allSkill = [
	{
		id: "1",
		style: "photoshop",
		title: "Adobe Photoshop",
		subtitle: "",
		level: "about.section2.intermplus",
		barlevel: "intermplus",
	},
];

function ListSkill() {
	{
		allSkill.map((skillStatus) => {
			return (
				<SkillCards
					key={skillStatus.id}
					cardStyle={skillStatus.style}
					title={skillStatus.title}
					subtitle={skillStatus.subtitle}
					level={skillStatus.level}
					cardLevel={skillStatus.barlevel}
				/>
			);
		});
	}
}

export default ListSkill;
