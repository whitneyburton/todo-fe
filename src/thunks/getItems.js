import { setLoading, setError, setItems } from '../actions';
import { fetchData } from '../utils/api';

export const getItems = (todoId = '', userId) => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const response = await fetchData(`/users/${userId}/todos/${todoId}/items`, 'GET');
      dispatch(setItems(response));
      return response;
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};
