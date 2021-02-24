import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pomodoro from "./pages/Pomodoro";
import Home from "./pages/Home";
import SessionContextProvider from "./context/session";

/*Moze da inportujem ovako css za bootstrap u svakom folderu gde ga koristim ili da ga inportujem u index.html
sa link i script-ama za react-bootstrap*/
// import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <SessionContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/pomodoro-clock">
            <Header />
            <Pomodoro />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </SessionContextProvider>
  );
};

export default App;
