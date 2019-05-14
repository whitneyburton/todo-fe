import { setLoading, setError, updateItem } from '../actions';
import { fetchData } from '../utils/api';

export const updateItems = (
  todoId = '',
  bool = false,
  todoItem = {}
) => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      await fetchData(`/todos/${todoId}/items/${todoItem.id}?done=${!bool}`, 'PUT');
      const updatedItem = await fetchData(`/todos/${todoId}/items/${todoItem.id}`, 'GET'); 
      dispatch(updateItem(updatedItem))
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};
