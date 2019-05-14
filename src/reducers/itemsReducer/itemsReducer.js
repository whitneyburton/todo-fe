export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return action.items
    case 'SET_ITEM':
      return [...state, action.item];
    default:
      return state
  }
}