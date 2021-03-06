import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Events from './Events.jsx';
import News from './News.jsx';
import Home from './Home.jsx';
import Instagram from './Instagram.jsx';
import Contact from './Contact.jsx';
import Admin from './Admin.jsx';

const App = () => (
  <div id="outerContainer">
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
        <Instagram />
      </Route>
      <Route path="/events">
        <Events />
      </Route>
      <Route path="/news">
        <News />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
    <Footer />
  </div>
);

export default App;
