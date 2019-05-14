export const setTodos = todos => ({
  type: 'SET_TODOS',
  todos
});

export const setTodo = todo => ({
  type: 'SET_TODO',
  todo
});

export const setItems = items => ({
  type: 'SET_ITEMS',
  items
});

export const setItem = item => ({
  type: 'SET_ITEM',
  item
});

export const setLoading = loading => ({
  type: 'SET_LOADING',
  loading
});

export const setError = error => ({
  type: 'SET_ERROR',
  error
});