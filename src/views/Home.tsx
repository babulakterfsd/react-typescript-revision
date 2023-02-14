import React from 'react';
import User from '../components/User';

function Home() {
  return (
    <div className=' flex justify-center items-center'>
      <User paraStyle={{ color: '#3b5', fontSize: '24px' }} />
    </div>
  );
}

export default Home;
