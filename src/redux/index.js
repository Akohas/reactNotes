import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

const store = createStore(combineReducers(reducers), {
  notes: [],
});

export default store;

