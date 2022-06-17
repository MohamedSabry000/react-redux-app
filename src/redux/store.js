import { createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers';

// const store = configureStore({
//   reducer: reducers,
// });
export const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());