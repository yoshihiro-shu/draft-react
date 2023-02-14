import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './component/NavBar';
import Header from './component/Header';
import TopicNav from './component/TopicNav'
import SideBar from './component/SideBar';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <TopicNav />
      <div className="container mx-auto flex flex-wrap py-6">
        {/* <NuxtPage /> */}
        <SideBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
