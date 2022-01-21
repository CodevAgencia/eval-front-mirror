import React, { useEffect } from 'react';
import jwtService from '../services/jwtService/jwtService';

const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const token = jwtService.getAccessToken();

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    // console.log({ token });
  });

  return { isLoggedIn };
};

export default useLogin;
