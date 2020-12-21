import { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import Subjects from '../pages/Subjects';
import Subject from '../pages/Subject';
import NotFound from '../pages/NotFound';

const App: FunctionComponent = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/subjects' component={Subjects} />
        <Route exact path='/subjects/:endpoint' component={Subject} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
