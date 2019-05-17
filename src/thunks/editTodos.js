import { setLoading, setError, updateTodo, updateItem } from '../actions';
import { fetchData } from '../utils/api';

export const editTodos = (todoTitle, itemName, userId, todo, item) => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      await fetchData(`/users/${userId}/todos/${todo.id}?title=${todoTitle}`, 'PUT');
      const updatedTodo = await fetchData(`/users/${userId}/todos/${todo.id}`, 'GET'); 
      dispatch(updateTodo(updatedTodo));
      
      await fetchData(`/users/${userId}/todos/${todo.id}/items/${item.id}?name=${itemName}`, 'PUT');
      const updatedItem = await fetchData(`/users/${userId}/todos/${todo.id}/items/${item.id}`, 'GET'); 
      dispatch(updateItem(updatedItem));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};