import React, { useEffect } from 'react';
import jwtService from '../services/jwtService/jwtService';

const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const token = jwtService.getAccessToken();

  console.log(token);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    // console.log({ token });
  }, [token]);

  return { isLoggedIn };
};

export default useLogin;
