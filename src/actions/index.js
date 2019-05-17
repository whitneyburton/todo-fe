export const setUser = id => ({
  type: 'SET_USER',
  id
});

export const logoutUser = id => ({
  type: 'LOGOUT_USER',
  id
});

export const setTodos = todos => ({
  type: 'SET_TODOS',
  todos
});

export const setTodo = todo => ({
  type: 'SET_TODO',
  todo
});

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
});

export const setItems = items => ({
  type: 'SET_ITEMS',
  items
});

export const setItem = item => ({
  type: 'SET_ITEM',
  item
});

export const updateItem = item => ({
  type: 'UPDATE_ITEM',
  item
})

export const setLoading = loading => ({
  type: 'SET_LOADING',
  loading
});

export const setError = error => ({
  type: 'SET_ERROR',
  error
});