import React from "react";
import Header from "../header/Header";
import Home from "./page/1.Home/Home";
import About from "./page/2.About/About";
import Services from "./page/3.Services/Services";
import Projects from "./page/4.Projects/Projects";
import Contact from "./page/5.Contacts/Contact";
import Footer from "../footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
