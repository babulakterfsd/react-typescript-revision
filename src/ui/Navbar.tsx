import React from 'react';

import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Navbar() {
  const { auth } = useAuth();
  const { isLoggedIn, handleLogin, handleLogOut } = auth;
  return (
    <div className='flex justify-end mb-36 mt-4 mr-4'>
      <nav className='bg-indigo-300 text-indigo-600 font-semibold py-2 px-4 gap-x-4 rounded-sm flex justify-evenly items-center'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/dashboard'>Dashboard</Link>
        {isLoggedIn ? (
          <button
            type='button'
            className='bg-purple-500 text-white font-bold text-center rounded-md px-2 py-1'
            onClick={handleLogOut}
          >
            LogOut
          </button>
        ) : (
          <button
            type='button'
            className='bg-purple-500 text-white font-bold text-center rounded-md px-2 py-1'
            onClick={handleLogin}
          >
            Login
          </button>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
