export const userReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.id
    case 'LOGOUT_USER':
      return action.id
    default:
      return state
  }
}