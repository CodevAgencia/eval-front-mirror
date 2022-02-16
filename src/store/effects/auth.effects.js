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
import { setItem, getItem } from '../../services/localStorage.service';
import {
  SUCCESS_MESSAGE,
  STATUS_CURRENT,
  ERROR_MESSAGE,
  GROUPS_FORM,
  TOKEN_KEY_STORAGE,
} from '../../common';

export function* sigInRequest(action) {
  try {
    yield put({ type: TYPE_REQUEST_FETCH });
    const { email, password } = action.payload;
    const token = yield call(signIn, { email, password });
    const user = jwtDecode(token);
    setItem(TOKEN_KEY_STORAGE, token);
    setItem(STATUS_CURRENT, user.status);
    yield put({ type: TYPE_AUTH_SUCCESS, payload: user });
    yield put({
      type: APP_SHOW_MESSAGE,
      payload: {
        message: 'Bienvenido',
        type: SUCCESS_MESSAGE,
      },
    });
    const { status } = user;
    yield put({ type: LOAD_PARTNERS, payload: { userId: user.id } });
    yield put(push(Number(status) === 0 ? '/equipo' : `/formulario/${GROUPS_FORM[status]}`));
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

export function* sigInRequestWithToken(action) {
  try {
    const { token } = action.payload;
    const user = jwtDecode(token);

    yield put({ type: TYPE_AUTH_SUCCESS, payload: user });
    yield put({
      type: APP_SHOW_MESSAGE,
      payload: {
        message: 'Bienvenido',
        type: SUCCESS_MESSAGE,
      },
    });

    const status = getItem(STATUS_CURRENT) ?? user.status;
    yield put({ type: LOAD_PARTNERS, payload: { userId: user.id } });
    yield put(push(Number(status) === 0 ? '/equipo' : `/formulario/${GROUPS_FORM[status]}`));
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
