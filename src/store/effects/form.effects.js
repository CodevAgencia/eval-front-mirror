import { push } from 'connected-react-router';
import { call, put } from 'redux-saga/effects';

import {
  SET_STATUS_FORM,
  APP_SHOW_MESSAGE,
  TYPE_REQUEST_FETCH,
  TYPE_REQUEST_FINISH,
  LOAD_THEMATICS_FORM_SUCCESS,
} from '../../common/actions';
import { SUCCESS_MESSAGE, ERROR_MESSAGE, GROUPS_FORM } from '../../common';
import { FormService } from '../../services/formStructureService';

export function* getDataFormGroup(action) {
  try {
    yield put({ type: TYPE_REQUEST_FETCH });
    const { groupId, userId } = action.payload;
    yield put({ type: SET_STATUS_FORM, payload: groupId });
    const response = yield call(FormService.getGroupWithData, { groupId, userId });
    yield put({
      type: LOAD_THEMATICS_FORM_SUCCESS,
      payload: {
        questions: response?.data?.map((t) => t.thematic.questions).flat(),
      },
    });
  } catch (error) {
    yield put({
      type: APP_SHOW_MESSAGE,
      payload: {
        message: 'Error cargando la informacion del formulario',
        type: ERROR_MESSAGE,
      },
    });
  } finally {
    yield put({ type: TYPE_REQUEST_FINISH });
  }
}

export function* saveResponses(action) {
  try {
    yield put({ type: TYPE_REQUEST_FETCH });
    yield call(FormService.saveResponses, action.payload);
    yield put({ type: SET_STATUS_FORM, payload: action.payload.newStatus });
    yield put({
      type: APP_SHOW_MESSAGE,
      payload: {
        message: 'Tus respuestas han sido guardadas',
        type: SUCCESS_MESSAGE,
      },
    });
    yield put(push(`/formulario/${GROUPS_FORM[action.payload.newStatus]}`));
  } catch (error) {
    yield put({
      type: APP_SHOW_MESSAGE,
      payload: {
        message: 'Error guardando tus respuestas',
        type: ERROR_MESSAGE,
      },
    });
  } finally {
    yield put({ type: TYPE_REQUEST_FINISH });
  }
}
