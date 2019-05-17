export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return action.todos;
    case 'SET_TODO':
      return [...state, action.todo];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    case 'UPDATE_TODO':
      return state.map(todo => {
        const { id } = action.todo;
        return todo.id === id ? action.todo : todo;
      });
    default:
      return state;
  }
};
