import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
