import jwtDecode from 'jwt-decode';
import { push } from 'connected-react-router';
import { call, put } from 'redux-saga/effects';

import {
  LOAD_PARTNERS,
  APP_SHOW_MESSAGE,
  TYPE_AUTH_SUCCESS,
  TYPE_REQUEST_FETCH,
  TYPE_REQUEST_FINISH,
} from '../../common/actions';
import { signIn } from '../../services/auth.service';
import { SUCCESS_MESSAGE, ERROR_MESSAGE, GROUPS_FORM } from '../../common';

export function* sigInRequest(action) {
  try {
    yield put({ type: TYPE_REQUEST_FETCH });
    const { email, password } = action.payload;
    const token = yield call(signIn, { email, password });
    const user = jwtDecode(token);

    yield put({ type: TYPE_AUTH_SUCCESS, payload: user });
    yield put({
      type: APP_SHOW_MESSAGE,
      payload: {
        message: 'Bienvenido',
        type: SUCCESS_MESSAGE,
      },
    });

    yield put({ type: LOAD_PARTNERS, payload: { userId: user.id } });
    yield put(push(`/formulario/${GROUPS_FORM[user.status]}`));
  } catch (error) {
    yield put({
      type: APP_SHOW_MESSAGE,
      payload: {
        message: 'Error al iniciar sesion',
        type: ERROR_MESSAGE,
      },
    });
  } finally {
    yield put({ type: TYPE_REQUEST_FINISH });
  }
}
