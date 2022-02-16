import { push } from 'connected-react-router';
import { call, put } from 'redux-saga/effects';

import {
  LOAD_PARTNERS,
  SET_STATUS_FORM,
  APP_SHOW_MESSAGE,
  TYPE_REQUEST_FETCH,
  TYPE_REQUEST_FINISH,
  LOAD_PARTNERS_SUCCES,
} from '../../common/actions';
import { ERROR_MESSAGE, GROUPS_FORM } from '../../common';
import { partnerService } from '../../services/partnerService';

export function* getPatners(action) {
  try {
    yield put({ type: TYPE_REQUEST_FETCH });
    const { userId } = action.payload;

    const partners = yield call(partnerService.getPartners, { userId });

    yield put({
      type: LOAD_PARTNERS_SUCCES,
      payload: {
        partners,
      },
    });
  } catch (error) {
    yield put({
      type: APP_SHOW_MESSAGE,
      payload: {
        message: 'Error cargando los miembros del equipo',
        type: ERROR_MESSAGE,
      },
    });
  } finally {
    yield put({ type: TYPE_REQUEST_FINISH });
  }
}

export function* savePatners(action) {
  try {
    yield put({ type: TYPE_REQUEST_FETCH });
    const { parthers, userId } = action.payload;
    yield call(partnerService.savePartners, { parthers, userId });
    yield put({ type: LOAD_PARTNERS, payload: { userId } });
    yield put({ type: SET_STATUS_FORM, payload: action.payload.newStatus });
    yield put(push(`/formulario/${GROUPS_FORM[1]}`));
  } catch (error) {
    yield put({
      type: APP_SHOW_MESSAGE,
      payload: {
        message: 'Error guardando los miembros del equipo',
        type: ERROR_MESSAGE,
      },
    });
  } finally {
    yield put({ type: TYPE_REQUEST_FINISH });
  }
}
