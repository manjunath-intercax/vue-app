import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import treeMockupReducer from '../features/tree-mock-up/treeMockupSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    treeMockup: treeMockupReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
