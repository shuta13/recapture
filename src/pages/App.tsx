import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Hoge from '../components/Hoge'

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={() => (
        <div>
          <h1>Root</h1>
          <Link to="/hoge">hoge</Link>
        </div>
      )} />
      <Route path="/hoge" component={Hoge} />
      <Route component={() => <h1>404</h1>} />
    </Switch>
  </Router>
);

export default App;
