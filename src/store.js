import { createStore } from 'redux';
import { moodReducer } from './reducers/moodReducer';

export default createStore(
  moodReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
