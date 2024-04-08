import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './pages/Error';
import Header from './header/Header';
import Home from './header/home/Home';
import User from './pages/User';
import Update from './pages/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement:<Error></Error>,
    children:[
         {
           path: '/',
           element:<Home></Home>
         },
         {
            path:'/user',
            element:<User></User>
         },
         {
           path:'/update',
           element:<Update></Update>
         }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

