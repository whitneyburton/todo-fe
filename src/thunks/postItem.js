import { setError, setLoading, setItem } from '../actions';
import { fetchData } from '../utils/api';

export const postItem = (name, done, todoId) => {
  const item = { name: name, done: done, todo_id: todoId }
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      await fetchData(`/todos/${todoId}/items?name=${name}&done=${done}`, 'POST');
      dispatch(setItem(item));
      return item;
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};
