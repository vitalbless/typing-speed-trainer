import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInput: '',
  startTime: null,
};

const typingSlice = createSlice({
  name: 'typing',
  initialState,
  reducers: {
    setUserInput: (state, action) => {
      state.userInput = action.payload;
    },
    setStartTime: (state, action) => {
      state.startTime = action.payload;
    },
    resetState: (state) => {
      state.userInput = '';
      state.startTime = null;
    },
  },
});

export const { setUserInput, setStartTime, resetState } = typingSlice.actions;

export default typingSlice.reducer;
