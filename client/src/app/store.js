import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { biggerNumberGameReducer } from '../features/biggerNumber/biggerNumberGameSlice';

export const store = configureStore({
  reducer: {
	counter: counterReducer,
	biggerNumberGame: biggerNumberGameReducer
  },
});
