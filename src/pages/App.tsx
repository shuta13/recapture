import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
