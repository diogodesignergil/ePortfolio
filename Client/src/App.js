// import logo from "./logo.svg";
import "./App.css";
// import axios from "axios";
// import react, { Component } from "react";
// import { head } from "../../Server/Routes/auth";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import LandingPage from "./components/layout/landing/LandingPage";
import Error404 from "./components/layout/error404/Error404";

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
  const location = useLocation();
  return (
    <Router>
      <Route location={location} key={location.pathname}>
        <Routes path="/" element={<LandingPage />} />
        <Routes path="*" element={<Error404 />} />
      </Route>
    </Router>
  );
}

export default App;
