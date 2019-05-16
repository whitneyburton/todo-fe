import { setLoading, setError, updateItem } from '../actions';
import { fetchData } from '../utils/api';

export const updateItems = (
  todoId = '',
  bool = false,
  userId = null
) => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      await fetchData(`/users/${userId}/todos/${todoId}/items/${todoId}?done=${!bool}`, 'PUT');
      const updatedItem = await fetchData(`/users/${userId}/todos/${todoId}/items/${todoId}`, 'GET'); 
      dispatch(updateItem(updatedItem))
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};
