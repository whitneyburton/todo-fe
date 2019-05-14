export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return action.items
    case 'SET_ITEM':
      return [...state, action.item];
    case 'UPDATE_ITEM':
      return state.map(item => {
        const { id } = action.item;
        return item.id === id ? action.item : item;
      });
    default:
      return state
  }
}