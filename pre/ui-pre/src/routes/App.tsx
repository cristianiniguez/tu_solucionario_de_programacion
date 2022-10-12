import { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import Subjects from '../pages/Subjects';
import Subject from '../pages/Subject';
import Post from '../pages/Post';
import Page from '../pages/Page';
import Search from '../pages/Search';
import NotFound from '../pages/NotFound';

import PostsContextProvider from '../context/PostsContext';

const App: FunctionComponent = () => (
  <PostsContextProvider>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/subjects' component={Subjects} />
          <Route exact path='/subjects/:endpoint' component={Subject} />
          <Route exact path='/post/:id' component={Post} />
          <Route exact path='/post/:postId/:pageIndex' component={Page} />
          <Route exact path='/search/:input' component={Search} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </PostsContextProvider>
);

export default App;
