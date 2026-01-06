import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './HomePage';
import Services from './Services';
import Clients from './Clients';
import Portfolio from './Portfolio';
import AboutPage from './AboutPage';
import Contact from './Contact';
import AllPages from './AllPages';
import "./css/App.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <AllPages />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/clients',
    element: <Clients />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <Contact />,
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
