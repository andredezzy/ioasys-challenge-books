import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';

import Route from './Route';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} isPrivate />
      </Switch>
    </Router>
  );
}

export default Routes;
