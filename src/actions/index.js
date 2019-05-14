export const setTodos = todos => ({
  type: 'SET_TODOS',
  todos
});

export const setItems = items => ({
  type: 'SET_ITEMS',
  items
});

export const setTodo = todo => ({
  type: 'SET_TODO',
  todo
});

export const setLoading = loading => ({
  type: 'SET_LOADING',
  loading
});

export const setError = error => ({
  type: 'SET_ERROR',
  error
});