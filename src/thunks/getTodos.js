import { setLoading, setError, setTodos, setItem } from '../actions';
import { fetchData } from '../utils/api';

export const getTodos = () => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const todos = await fetchData('/todos', 'GET');
      dispatch(setTodos(todos));
      todos.forEach(async todo => {
        const item = await fetchData(`/todos/${todo.id}/items`, 'GET');
        dispatch(setItem(item[0]))
      })
      return todos;
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};
