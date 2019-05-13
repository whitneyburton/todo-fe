import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer/todosReducer';
import { loadingReducer } from './loadingReducer/loadingReducer';
import { errorReducer } from './errorReducer/errorReducer';

export const rootReducer = combineReducers({
  todos: todosReducer,
  loading: loadingReducer,
  error: errorReducer
});