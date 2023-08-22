import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import SignUp from './pages/SignUp/SignUp.tsx';
import Login from './pages/Login/Login.tsx';
import Forgetpassword from './pages/ForgetPassword/ForgetPassword.tsx';
import Step1 from './pages/OnBoarding/Step1.tsx';
import Step2 from './pages/OnBoarding/Step2.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element:  <App />,
  },
  {
    path: '/Home',
    element:  <Home />,
  },
  {
    path: '/SignUp',
    element:  <SignUp />,
  },
  {
    path: '/Login',
    element:  <Login />,
  },
  {
    path: '/Forgetpassword',
    element:  <Forgetpassword />,
  },
  {
    path: '/OnBoarding1',
    element:  <Step1 />,
  },
  {
    path: '/OnBoarding2',
    element:  <Step2 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
);
