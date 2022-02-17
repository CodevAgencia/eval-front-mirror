import { useDispatch, useSelector } from 'react-redux';

import { getItem, removeItem } from '../services/localStorage.service';
import { TOKEN_KEY_STORAGE, STATUS_CURRENT } from '../common/constants';
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

  const logout = () => {
    removeItem(TOKEN_KEY_STORAGE);
    removeItem(STATUS_CURRENT);
    window.location.replace('/');
  };

  return {
    user,
    logout,
    loggedIn,
    signInRequest,
    loadTokenSave,
  };
};
