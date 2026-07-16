import { configureStore } from '@reduxjs/toolkit';
import enrollmentReducer from './enrollmentSlice';

// Step 86: Create store.js using configureStore
export const store = configureStore({
  reducer: {
    enrollment: enrollmentReducer
  }
});
