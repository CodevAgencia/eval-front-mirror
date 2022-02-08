import { useDispatch, useSelector } from 'react-redux';

import { TYPE_AUTH_REQUEST } from '../common/actions';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { loggedIn, user } = useSelector((state) => state.auth);

  const signInRequest = (email, password) => {
    dispatch({
      type: TYPE_AUTH_REQUEST,
      payload: {
        email,
        password,
      },
    });
  };

  return {
    user,
    loggedIn,
    signInRequest,
  };
};
