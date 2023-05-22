// import logo from "./logo.svg";
import "./App.css";
// import axios from "axios";
// import react, { Component } from "react";
// import { head } from "../../Server/Routes/auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./layout/landing/LandingPage";
import Error404 from "./layout/error404/Error404";

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
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
