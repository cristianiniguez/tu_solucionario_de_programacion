import { FunctionComponent } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import Subjects from '../pages/Subjects';
import Subject from '../pages/Subject';
import Post from '../pages/Post';
import Page from '../pages/Page';
import Search from '../pages/Search';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/subjects', element: <Subjects /> },
      { path: '/subjects/:endpoint', element: <Subject /> },
      { path: '/post/:id', element: <Post /> },
      { path: '/post/:postId/:pageIndex', element: <Page /> },
      { path: '/search/:input', element: <Search /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

const App: FunctionComponent = () => <RouterProvider router={router} />;

export default App;
