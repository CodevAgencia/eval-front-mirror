import { SET_STATUS_FORM, LOAD_THEMATICS_FORM_SUCCESS } from '../../common/actions';

const initialState = {
  questions: [],
  status: 0,
};

const appFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS_FORM: {
      return {
        ...initialState,
        status: action.payload,
      };
    }
    case LOAD_THEMATICS_FORM_SUCCESS: {
      return {
        ...state,
        questions: action.payload.questions,
      };
    }
    default: {
      return state;
    }
  }
};

export default appFormReducer;
