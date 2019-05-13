import * as actions from './index';

describe('actions', () => {
  it('should return a type of SET_TODOS with an array of todos', () => {
    const mockTodos = [{ name: 'Complete developer assessment', created_by: 3 }];
    const expected = {
      type: 'SET_TODOS',
      todos: mockTodos
    };
    const result = actions.setTodos(mockTodos);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_ITEMS with an array of items', () => {
    const mockItems = [{ name: 'Study Ruby on Rails', done: false, todo_id: 2 }];
    const expected = {
      type: 'SET_ITEMS',
      items: mockItems
    };
    const result = actions.setItems(mockItems);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_LOADING with a boolean', () => {
    const mockLoading = true;
    const expected = {
      type: 'SET_LOADING',
      loading: mockLoading
    };
    const result = actions.setLoading(mockLoading);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_ERROR with an error message', () => {
    const mockError = 'Error message';
    const expected = {
      type: 'SET_ERROR',
      error: mockError
    };
    const result = actions.setError(mockError);
    expect(result).toEqual(expected);
  });
});