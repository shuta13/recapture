import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Hoge from '../components/Hoge';
import NotFound from '../components/NotFound';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        component={() => (
          <div>
            <h1>Root</h1>
            <Link to="/hoge">hoge</Link>
          </div>
        )}
      />
      <Route path="/hoge" component={Hoge} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
