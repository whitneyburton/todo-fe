import { setLoading, setError, setUser } from '../actions';
import { fetchData } from '../utils/api';

export const getUser = (email, password) => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const user = await fetchData(`/sessions?email=${email}&password=${password}`, 'POST');
      dispatch(setUser(user.id));
      return user.id;
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};