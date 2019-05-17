import { setLoading, setError, setUser, setTodos, setItems } from '../actions';
import { fetchData } from '../utils/api';

export const logoutUser = id => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      // await fetchData(`/sessions?id=${id}`, 'DELETE');
      dispatch(setUser(''));
      dispatch(setTodos([]));
      dispatch(setItems([]));
      dispatch(setError(''));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};