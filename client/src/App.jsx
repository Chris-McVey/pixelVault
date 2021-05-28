import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Events from './Events.jsx';
import News from './News.jsx';
import Home from './Home.jsx';
import Instagram from './Instagram.jsx';
import Contact from './Contact.jsx';

const App = () => (
  <div id="outerContainer">
    <Header />
    <div />
    <Switch>
      <Route exact path="/" component={Home}>
        <Instagram />
        {/* <Home /> */}
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
    </Switch>
    {/* <Instagram /> */}
    <Footer />
  </div>
);

export default App;
