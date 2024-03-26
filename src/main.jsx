import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagestoRead from './components/PagestoRead/PagestoRead';
import Blog from './components/Blog/Blog';
import Community from './components/Community/Community';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/books.json'),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks />,
      },
      {
        path: "/pagesToRead",
        element: <PagestoRead />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/community",
        element: <Community />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
