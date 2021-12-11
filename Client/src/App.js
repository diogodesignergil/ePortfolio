import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import react, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/auth/login").then((res) => {
      const result = res.data.rows;
      console.log(result);
      this.setState({ results: result });
    });
  }

  databaseResult() {
    return this.state.results.map((data) => {
      return <p>{data.text}</p>;
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.databaseResult()}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
