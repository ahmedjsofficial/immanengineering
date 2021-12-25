import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import About from './Components/About.js';
import Footer from './Components/Footer.js';
import Home from './Components/Home.js';
import Navbar from './Components/Navbar.js';
import Projects from './Components/Projects.js';
import Products from './Components/Products.js';
import Contact from './Components/Contact.js';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/contact" component={Contact} />
          <Redirect exact to="/" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
