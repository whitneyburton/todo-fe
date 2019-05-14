import { setLoading, setError, setTodos, setItems } from '../actions';
import { fetchData } from '../utils/api';

export const getTodos = () => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const todos = await fetchData('/todos', 'GET');
      dispatch(setTodos(todos));
      let allItems = [];
      todos.forEach(async todo => {
        const response = await fetchData(`/todos/${todo.id}/items`, 'GET');
        const items = response.map(item => {
          return { name: item.name, done: item.done, todo_id: item.todo_id }
        })
        allItems.push(items[0])
        dispatch(setItems(allItems))
      })
      return todos;
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};
