import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import formStructureService from '../../services/apiService/formStructureService';

export const getThematic = createAsyncThunk(
  'formStructure/getThematic',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await formStructureService.getThematic();
      console.log('slice thematic', response);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getGroup = createAsyncThunk(
  'formStructure/getGroup',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      return await formStructureService.getGroup();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getQuestion = createAsyncThunk(
  'formStructure/getQuestion',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      return await formStructureService.getQuestion();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  thematic: null,
  group: null,
  question: null,
  loading: false,
  error: null,
};

const formStructureAdapter = createEntityAdapter({});

export const { selectAll: selectCategoryBank, selectById: selectCategoryBankById } =
  formStructureAdapter.getSelectors((state) => state.formStructure);

const formStructureSlice = createSlice({
  name: 'formStructure',
  initialState: formStructureAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: {
    [getThematic.pending]: (state) => {
      state.loading = true;
    },
    [getThematic.fulfilled]: (state, action) => {
      state.loading = false;
      state.thematic = action.payload;
    },
    [getThematic.rejected]: (state, action) => {
      state.loading = false;
      state.errors = 'Error al cargar las tematicas';
    },
    [getGroup.pending]: (state) => {
      state.loading = true;
    },
    [getGroup.fulfilled]: (state, action) => {
      state.loading = false;
      state.group = action.payload;
    },
    [getGroup.rejected]: (state, action) => {
      state.loading = false;
      state.errors = 'Error al cargar los grupos';
    },
    [getQuestion.pending]: (state) => {
      state.loading = true;
    },
    [getQuestion.fulfilled]: (state, action) => {
      state.loading = false;
      state.question = action.payload;
    },
    [getQuestion.rejected]: (state, action) => {
      state.loading = false;
      state.errors = 'Error al cargar las preguntas';
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = formStructureSlice.actions;

export default formStructureSlice.reducer;
