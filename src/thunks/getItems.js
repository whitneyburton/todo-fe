import { setLoading, setError, setItems } from '../actions';
import { fetchData } from '../utils/api';

export const getItems = (todoId = '') => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const items = await fetchData(`/todos/${todoId}/items`, 'GET');
      dispatch(setItems(items));
      return items;
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};
