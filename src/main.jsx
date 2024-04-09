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
import Carddetail from './cards/Carddetail';
import Registration from './cards/form/Registration';
import Login from './cards/form/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement:<Error></Error>,
    children:[
         {
           path: '/',
           element:<Home></Home>,
           loader: ()=>fetch('/data.json'),
         },
         {
            path:'/user',
            element:<User></User>
         },
         {
           path:'/update',
           element:<Update></Update>
         },
         {
           path:`/detail/:id`,
           element:<Carddetail></Carddetail>,
           loader:()=>fetch('/data.json')
         },
         {
           path:'/registration',
           element:<Registration></Registration>
         },
         {
           path:'/login',
           element:<Login></Login>
         }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
