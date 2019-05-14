import { setLoading, setError, setItems } from '../actions';
import { fetchData } from '../utils/api';

export const getItems = (todoId = '') => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const response = await fetchData(`/todos/${todoId}/items`, 'GET');
      const items = response.map(item => {
        return { name: item.name, done: item.done, todo_id: item.todo_id }
      })
      dispatch(setItems(items));
      return items;
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};
