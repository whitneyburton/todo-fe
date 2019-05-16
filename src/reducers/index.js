import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer/todosReducer';
import { itemsReducer } from './itemsReducer/itemsReducer';
import { loadingReducer } from './loadingReducer/loadingReducer';
import { errorReducer } from './errorReducer/errorReducer';
import { userReducer } from './userReducer/userReducer';

export const rootReducer = combineReducers({
  todos: todosReducer,
  items: itemsReducer,
  loading: loadingReducer,
  error: errorReducer,
  userId: userReducer
});