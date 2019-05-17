import { setLoading, setError, setUser } from '../actions';
import { fetchData } from '../utils/api';

export const logoutUser = id => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      await fetchData(`/sessions?id=${id}`, 'DELETE');
      dispatch(setUser(''));
      dispatch(setError(''));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};