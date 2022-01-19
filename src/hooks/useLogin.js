import React, { useEffect } from 'react';

const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const token = localStorage.getItem('@emprendedor');

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [token]);

  return { isLoggedIn };
};

export default useLogin;
