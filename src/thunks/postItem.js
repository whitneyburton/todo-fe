import { setError, setLoading, setItem } from '../actions';
import { fetchData } from '../utils/api';

export const postItem = (name, done, todoId, userId) => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      await fetchData(`/users/${userId}/todos/${todoId}/items?name=${name}&done=${done}`, 'POST');
      const newItem = await fetchData(`/users/${userId}/todos/${todoId}/items`, 'GET'); 
      dispatch(setItem(...newItem));
      return newItem;
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};
