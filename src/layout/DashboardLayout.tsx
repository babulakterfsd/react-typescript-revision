import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <main className='px-16'>
      <h1 className='text-indigo-600 bg-indigo-300 px-2 py-0.5 rounded-sm text-center font-bold'>
        Welcome to the dashboard, User !
      </h1>
      <div className='flex'>
        {/* dashboard menu */}
        <div className='w-40 bg-indigo-300 h-40 px-4 text-center py- 1 font-bold text-indigo-600 pt-8 flex flex-col gap-y-4'>
          <Link to='profile'>Profile</Link>
          <Link to='balance'>Balance</Link>
        </div>

        {/* dashboard content */}
        <div className='ml-8 mt-8'>
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default DashboardLayout;
