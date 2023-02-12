import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../ui/Footer';
import Navbar from '../ui/Navbar';

function AppLayout() {
  return (
    <>
      <Link
        to='/'
        className='absolute top-4 left-4 text-indigo-300 bg-indigo-600 p-2 text-center rounded-md font-bold'
      >
        Starter
      </Link>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
