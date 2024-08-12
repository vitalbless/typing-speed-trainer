import { configureStore } from '@reduxjs/toolkit';
import typingReducer from '../features/typing/typingSlice';
import { typingApi } from '../features/typing/typingApi';

export const store = configureStore({
  reducer: {
    typing: typingReducer,
    [typingApi.reducerPath]: typingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(typingApi.middleware),
});

export default store;
