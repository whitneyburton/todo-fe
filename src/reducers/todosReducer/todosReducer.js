export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return action.todos
    default:
      return state
  }
}