import React from 'react';
import { Route, Switch, useLocation } from "react-router";

import { AnimatePresence } from "framer-motion";

// Components
import Main from "../components/Main";
import AboutPage from "../components/AboutPage";
import BlogPage from "../components/BlogPage";
import WorkPage from "../components/WorkPage";
import MySkillsPage from "../components/MySkillsPage";
// import MySkillsPage2 from "../components/MySkillsPage2";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      {/* 'AnimatePresence'
        For framer-motion animation 
        on page change */}
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/work" component={WorkPage} />
        <Route exact path="/skills" component={MySkillsPage} />
      </Switch>
    </AnimatePresence>
  );
}

export default AnimatedRoutes