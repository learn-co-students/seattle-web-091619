import React from "react";
import "./assets/css/minty.css";
import "./App.css";
import GlassesBrowser from "./components/GlassesBrowser";
import Manager from "./components/Manager";
import NavBar from "./components/NavBar";
import GLASSES from "./data";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Details from "./components/Details";
import { thisTypeAnnotation } from "@babel/types";

// We need to take care of routing and rendering GlassesBrowser, Manager, and Details
// With appropriate client-side routes / URLs

class App extends React.Component {
  state = {
    glasses: []
  };

  componentDidMount() {
    this.setState({ glasses: GLASSES });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          {/* <a href="/glasses">Glasses</a>
          <a href="/manager">Manager</a> */}
          <Link to="/manager">Manager</Link>
          <Link to="/glasses">Glasses</Link>
          <Route
            path="/glasses"
            exact
            render={() => <GlassesBrowser glasses={this.state.glasses} />}
          />
          <Route path="/manager" component={Manager} />
          <Route path="/glasses/:id" render={(props) => <Details {...props} glasses={this.state.glasses}/>} />
        </Router>
      </div>
    );
  }
}

export default App;
