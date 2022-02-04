import { createSlice } from '@reduxjs/toolkit';
import jwtService from '../../services/jwtService';
import { setUserData } from './userSlice';
import { showMessage } from '../../store/app/messageSlice';

export const submitLogin =
  ({ email, password }) =>
  async (dispatch) => {
    return jwtService
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('user: -> ', user);
        const data = {
          role: ['Invitado'],
          data: {
            displayName: email,
            email,
            displayUser: email,
            diplayDocument: email,
          },
        };

        dispatch(setUserData(data));

        dispatch(
          showMessage({
            message: 'Inicio de sesión satisfactorio',
            variant: 'success',
          })
        );

        return dispatch(loginSuccess());
      })
      .catch((errors) => {
        dispatch(
          showMessage({
            message: errors,
            variant: 'error',
          })
        );
        return dispatch(loginError(errors));
      });
  };

const initialState = {
  success: false,
  errors: [],
};

const loginSlice = createSlice({
  name: 'auth/login',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.success = true;
      state.errors = [];
    },
    loginError: (state, action) => {
      state.success = false;
      state.errors = action.payload;
    },
  },
  extraReducers: {},
});

export const { loginSuccess, loginError } = loginSlice.actions;

export default loginSlice.reducer;
