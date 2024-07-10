import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import YouTuberDetailsPage from './pages/details';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navbar'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <>
      <Login />
    </>,
  },
  {
    path: "/",
    element: <>
      <Navbar />
      <Homepage />
    </>,
  },
  {
    path: "/details",
    element: <>
      <Navbar />
      <YouTuberDetailsPage />
    </>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ToastContainer />
    <RouterProvider router={router} />
  </Provider>
)
