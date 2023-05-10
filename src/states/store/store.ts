import { configureStore } from '@reduxjs/toolkit';
import indexReducer from '../reducers';

const store = configureStore({
  reducer: {
    index: indexReducer
  },
  
});

export default store;
