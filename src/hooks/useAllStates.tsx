import { useState } from 'react';

const AllStates = () => {
  // states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    localStorage.setItem('loggedIn', 'true');
    setIsLoggedIn(true);
  };
  const handleLogOut = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
  };

  if (isLoggedIn === false) {
    if (localStorage.getItem('loggedIn') === 'true') {
      setIsLoggedIn(true);
    }
  }

  const auth = { isLoggedIn, setIsLoggedIn, handleLogin, handleLogOut };

  return {
    auth,
  };
};

export default AllStates;
