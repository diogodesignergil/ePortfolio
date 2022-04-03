import React from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import About from "../page/About";
import Contact from "../page/Contact";
import Error404 from "../page/Error404";
import Home from "../page/Home";
import Projects from "../page/Projects";
import ProjectsPage from "../page/ProjectsPage";
import Services from "../page/Services";
import ServicesPage from "../page/ServicesPage";
import ArticlePage from "../page/ArticlePage";

import { AnimatePresence } from "framer-motion/dist/framer-motion";

function AnimatedRoutes() {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/services" element={<Services />} />
				<Route path="/services/:id" element={<ServicesPage />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/projects/:id" element={<ProjectsPage />} />
				<Route
					path="/projects/:id/article/:articleid"
					element={<ArticlePage />}
				/>
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;
