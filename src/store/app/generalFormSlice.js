import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const generalFormAdapter = createEntityAdapter({});

const initialDialogGeneralForm = {
  form: 'general',

  questions: [],
  data: null,
};

const generalFormSlice = createSlice({
  name: 'generalForm',
  initialState: generalFormAdapter.getInitialState(initialDialogGeneralForm),
  reducers: {
    changeForm: (state, action) => {
      state.form = action.payload;
    },
  },
  extraReducers: {},
});

export const { changeForm } = generalFormSlice.actions;

export default generalFormSlice.reducer;
