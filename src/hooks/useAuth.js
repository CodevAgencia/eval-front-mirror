import { useDispatch, useSelector } from 'react-redux';

import { TOKEN_KEY_STORAGE } from '../common/constants';
import { getItem } from '../services/localStorage.service';
import { TYPE_AUTH_REQUEST, TYPE_AUTH_REQUEST_WITH_TOKEN } from '../common/actions';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { loggedIn, user } = useSelector((state) => state.auth);

  const loadTokenSave = () => {
    const token = getItem(TOKEN_KEY_STORAGE);
    if (token) {
      dispatch({
        type: TYPE_AUTH_REQUEST_WITH_TOKEN,
        payload: {
          token,
        },
      });
    }
  };

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
    loadTokenSave,
  };
};
