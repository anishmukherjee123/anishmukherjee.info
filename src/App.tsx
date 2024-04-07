import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { Header } from './components/Header';
import { BlogPage } from './components/BlogPage';
import { Footer } from './components/Footer';
import ErrorPage from './ErrorPage';

function Layout() {
  return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [  
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/blog",
      element: <BlogPage />,
      errorElement: <ErrorPage />
    }]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
