// import logo from "./logo.svg";
import "./App.css";
// import axios from "axios";
import react, { Component } from "react";
// import { head } from "../../Server/Routes/auth";
import { Header } from "./components/layout/header/Header";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Services from "./page/Services";
import Projects from "./page/Projects";
import Footer from "./components/layout/footer/Footer";

function App() {
  // constructor(props) {
  //   super(props);
  //   this.state = { results: [] };
  // }

  // componentDidMount() {
  //   axios.get("http://localhost:5000/auth/login").then((res) => {
  //     const result = res.data.rows;
  //     console.log(result);
  //     this.setState({ results: result });
  //   });
  // }

  // databaseResult() {
  //   return this.state.results.map((data) => {
  //     return <p>{data.text}</p>;
  //   });
  // }
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
