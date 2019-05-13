export const setTodos = todos => ({
  type: 'SET_TODOS',
  todos
});

export const setLoading = loading => ({
  type: 'SET_LOADING',
  loading
});

export const setError = error => ({
  type: 'SET_ERROR',
  error
});