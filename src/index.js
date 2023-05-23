import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from "./App/store"
import Landing from './Landing/Landing';
import Dashboard from './Dashboard/Dashboard';
import Isi from './Isisurvey/Isi';
import QuizState from './context/QuizState';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "Landing",
    element: <Landing/>
  },
  {
    path: "Dashboard",
    element: <Dashboard/>
  },
  {
    path: "Isi",
    element: <Isi/>
  },
  {
    path: "QuizState",
    element: <QuizState/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
