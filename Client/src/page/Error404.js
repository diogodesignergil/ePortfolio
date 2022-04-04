import React from "react";

import "./error404.css";

import { useTranslation } from "react-i18next";

import { motion } from "framer-motion/dist/framer-motion";

function Error404() {
	const [t] = useTranslation();

	return (
		<motion.section
			className="error"
			initial={{ y: window.innerHeight, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{
				y: window.innerHeight,
				opacity: 0,
				transition: { duration: 0.1 },
			}}
		>
			<h1>404</h1>
			<p>Oooops...</p>
			<p>{t("error.notfound")}</p>
		</motion.section>
	);
}

export default Error404;
