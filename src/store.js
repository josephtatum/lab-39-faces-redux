import { createStore } from 'redux';
import { moodReducer } from './reducers/moodReducer';

export const store = createStore(
  moodReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
