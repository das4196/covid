import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

//Importing pages
import Covid from "./Pages/Covid-19/Covid";
import Symptoms from "./Pages/Symptoms/Symptoms";
import About from "./Pages/About/About";
import Prevention from "./Pages/Prevention/Prevention";
//Importing components

import Home from "./Components/HomePage/Home";
// Importing layouts

import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";

function App() {
  //initializing state values

  const routerArr = ["Home", "Symptoms", "Prevention", "About", "Covid-19"];
  const routerComp = [
    <Home />,
    <Symptoms />,
    <Prevention />,
    <About />,
    <Covid />,
  ];
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          {routerArr.map((item, index) => {
            return (
              <Route key={index} exact path={`/${item}`}>
                {routerComp[index]}
              </Route>
            );
          })}
          <Redirect to="/Home" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
