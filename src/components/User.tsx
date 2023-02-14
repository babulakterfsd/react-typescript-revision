import React from 'react';

const User = ({ paraStyle }: { paraStyle: React.CSSProperties }) => {
  return (
    <div className='flex justify-around items-center w-full'>
      <p style={paraStyle}>Hello world</p>
    </div>
  );
};

export default User;
