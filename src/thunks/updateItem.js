import { setLoading, setError, setItem } from '../actions';
import { fetchData } from '../utils/api';

export const updateItem = (todoId = '', itemId = '', bool) => {
  console.log(todoId, itemId, bool)
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const response = await fetchData(`/todos/${todoId}/items/${itemId}?done=${!bool}`, 'PUT');
      console.log(response)
      // dispatch(setItem(response));
      // return items;
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};
