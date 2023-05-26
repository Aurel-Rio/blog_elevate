import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Accueil from './Accueil';
import Articles from './Articles';
import Categories from './Categories';
import APropos from './APropos';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Accueil />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/a-propos">
          <APropos />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;