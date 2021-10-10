import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import App from "../App";
import About from "./About/About";
import Navbar from "./Navbar/Navbar";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
export default function Layout() {
  const timeout = { enter: 800, leave: 400 };

  return (
    <Router>
      <TransitionGroup component="div" className="App">
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="pageSlider"
          mountOnEnter={false}
          unmountOnExit={true}
        >
          <div>
            <Switch>
              <Route path="/about">
                <Navbar />
                <About />
              </Route>
              <Route path="/skills">
                <Navbar />
                <Skills />
              </Route>
              <Route path="/projects">
                <Navbar />
                <Projects />
              </Route>
              <Route path="/contact">
                <Navbar />
                <Contact />
              </Route>
              <Route path="/">
                <App />
              </Route>
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Router>
  );
}
