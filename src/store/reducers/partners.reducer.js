import { LOAD_PARTNERS_SUCCES } from '../../common/actions';

const initialState = {
  partners: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PARTNERS_SUCCES: {
      return {
        partners: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
