import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import NavBar from './component/NavBar';
import Header from './component/Header';
import TopicNav from './component/TopicNav'
import SideBar from './component/SideBar';
import Footer from './component/Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavBar />
      <Header />
      <TopicNav />
      <div className="container mx-auto flex flex-wrap py-6">
      <App />
        <SideBar />
      </div>
      <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
