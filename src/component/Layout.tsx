import React from 'react'
import { Outlet } from 'react-router-dom'

import NavBar from './NavBar';
import Header from './Header';
import TopicNav from './TopicNav'
import SideBar from './SideBar';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <>
      <NavBar />
      <Header />
      <TopicNav />
      <div className="container mx-auto flex flex-wrap py-6">
        <Outlet />
        <SideBar />
      </div>
      <Footer />
    </>
  )
}

export default Layout;
