import {
  APP_SHOW_MESSAGE,
  APP_HIDE_MESSAGE,
  TYPE_REQUEST_FETCH,
  TYPE_REQUEST_FINISH,
} from '../../common/actions';

const initialState = {
  message: null,
  type: 'info',
  loading: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_HIDE_MESSAGE: {
      return initialState;
    }
    case APP_SHOW_MESSAGE: {
      return {
        type: action.payload.type,
        message: action.payload.message,
      };
    }
    case TYPE_REQUEST_FETCH: {
      return {
        ...state,
        loading: true,
      };
    }
    case TYPE_REQUEST_FINISH: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
