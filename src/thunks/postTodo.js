import { setError, setLoading, setTodo } from '../actions';
import { fetchData } from '../utils/api';

export const postTodo = (title, userId) => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const response = await fetchData(`/users/${userId}/todos?title=${title}&user_id=${userId}`, 'POST');
      dispatch(setTodo(response));
      return response;
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};
