import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import App from "../App";
import About from "./About/About";
import Navbar from "./Navbar/Navbar";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
export default function Layout() {

    return (
        <Router>
            <div>


                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <Navbar />
                        <About />
                    </Route>
                    <Route path="/skills">
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
        </Router>
    );
}