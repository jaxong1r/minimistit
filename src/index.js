import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import ErrorPage from './page/ErrorPage';
import HomePage from './page/HomePage';
import Portfolio from './page/Portfolio';
import ManagePage from './page/ManagePage';
import BookPage from './page/BookPage';
import InsurePage from './page/InsurePage';
import FlyoPage from './page/FlyoPage';
import CPage from './page/CPage';


const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        element:  <HomePage />,
        path: "/",
      },
      {
        element: <Portfolio />,
        path: "/port",
      },
     
      {
        element:  <ManagePage />,
        path: "/manage",
      },
      {
        element:  <BookPage />,
        path: "/book",
      },
      {
        element:  <InsurePage />,
        path: "/insure",
      },

        {
        element:  <FlyoPage />,
        path: "/flyo",
      },
      {
        element:   <CPage />,
        path: "/contact",
      },
      
      
     
    ]
  }
]);

 
root.render(
  <React.StrictMode>
      <RouterProvider router={appRouter} />
  </React.StrictMode>
);


