import { setLoading, setError, setTodos, setItems } from '../actions';
import { fetchData } from '../utils/api';

export const deleteTodo = (todoId, itemId, items) => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      await fetchData(`/todos/${todoId}`, 'DELETE');
      const updatedTodos = await fetchData('/todos', 'GET')
      dispatch(setTodos(updatedTodos));
      const updatedItems = items.filter(item => item.id !== itemId)
      dispatch(setItems(updatedItems))
      return updatedTodos;
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};
