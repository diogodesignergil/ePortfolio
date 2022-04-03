// import logo from "./logo.svg";
import "./App.css";
// import axios from "axios";
// import react, { Component } from "react";
// import { head } from "../../Server/Routes/auth";
import { Header } from "./components/layout/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

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
			<AnimatedRoutes />
			<Footer />
		</Router>
	);
}

export default App;
