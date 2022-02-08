import { TYPE_AUTH_SUCCESS } from '../../common/actions';

const initialState = {
  loggedIn: false,
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_AUTH_SUCCESS: {
      return {
        loggedIn: true,
        user: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
