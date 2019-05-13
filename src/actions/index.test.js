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
  })
});