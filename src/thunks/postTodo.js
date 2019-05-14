import { setError, setLoading, setTodo } from '../actions';
import { fetchData } from '../utils/api';

export const postTodo = (title, userId) => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const response = await fetchData(`/todos?title=${title}&created_by=${userId}`, 'POST');
      dispatch(setTodo(response));
      return response;
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};
