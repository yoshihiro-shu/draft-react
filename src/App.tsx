import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css';

import Layout from './component/Layout';
import TopPage from './pages/TopPage';
import NewArticles from './pages/NewArticles';
import AritcleDetail from './pages/ArticleDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <TopPage /> },
      {
        path: "new/:page",
        element: <NewArticles />,
      },
      {
        path: "articles/:id",
        element: <AritcleDetail />,
      },
    ],
  },
]);


const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
