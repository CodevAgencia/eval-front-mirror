import { takeEvery } from 'redux-saga/effects';

import {
  LOAD_PARTNERS,
  SAVE_PARTNERS,
  TYPE_AUTH_REQUEST,
  LOAD_THEMATICS_FORM,
  SAVE_RESPONSES_FORM,
} from '../../common/actions';
import { sigInRequest } from './auth.effects';
import { getPatners, savePatners } from './partners.effects';
import { getDataFormGroup, saveResponses } from './form.effects';

export function* mySagas() {
  yield takeEvery(TYPE_AUTH_REQUEST, sigInRequest);
  yield takeEvery(LOAD_THEMATICS_FORM, getDataFormGroup);
  yield takeEvery(SAVE_PARTNERS, savePatners);
  yield takeEvery(LOAD_PARTNERS, getPatners);
  yield takeEvery(SAVE_RESPONSES_FORM, saveResponses);
}
