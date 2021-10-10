import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch, spring } from "react-router-transition";
const App = lazy(() => import("../App"));
const About = lazy(() => import("./About/About"));
const Navbar = lazy(() => import("./Navbar/Navbar"));
const Skills = lazy(() => import("./Skills/Skills"));
const Projects = lazy(() => import("./Projects/Projects"));
const Contact = lazy(() => import("./Contact/Contact"));
export default function Layout() {
  function bounce(val) {
    return spring(val, {
      stiffness: 100,
      damping: 50,
    });
  }

  return (
    <Router>
      <div>
        <AnimatedSwitch
          atEnter={{ opacity: 0, scale: 1.2, translateX: -100 }}
          atLeave={{ opacity: bounce(0), scale: bounce(0.8), translateX: 100 }}
          atActive={{ opacity: bounce(1), scale: bounce(1), translateX: 0 }}
          mapStyles={(styles) => ({
            transform: `translateX(${styles.translateX}%)`,
            opacity: styles.opacity,
            scale: styles.scale,
          })}
          className="switch-wrapper"
        >
          <Route key="about" exact path="/about">
            <Suspense fallback={"loading..."}>
              <Navbar />
              <About />
            </Suspense>
          </Route>
          <Route key="skills" exact path="/skills">
            <Suspense fallback={"loading..."}>
              <Navbar />
              <Skills />
            </Suspense>
          </Route>
          <Route key="projects" exact path="/projects">
            <Suspense fallback={"loading..."}>
              <Navbar />
              <Projects />
            </Suspense>
          </Route>
          <Route key="contact" exact path="/contact">
            <Suspense fallback={"loading..."}>
              <Navbar />
              <Contact />
            </Suspense>
          </Route>
          <Route key="home" exact path="/">
            <Suspense fallback={"loading..."}>
              <App />
            </Suspense>
          </Route>
        </AnimatedSwitch>
      </div>
    </Router>
  );
}
