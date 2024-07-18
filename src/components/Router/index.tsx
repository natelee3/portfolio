import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Appbar from '../Appbar';
import Home from '../../pages/Home';
import About from '../../pages/About';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '*',
        element: <Home />,
        index: true,
      },
    ],
  },
]);

function Layout() {
  return (
    <>
      <Appbar />
      <Outlet />
    </>
  );
}

const Router = () => <RouterProvider router={router} />;

export default Router;
