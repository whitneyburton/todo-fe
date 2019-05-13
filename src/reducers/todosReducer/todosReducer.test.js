import { todosReducer } from './todosReducer'
import * as actions from '../../actions'

const mockTodos = [{ name: 'Complete developer assessment', created_by: 3 }];

describe('todosReducer', () => {
  it('should return the default state', () => {
    const result = todosReducer(undefined, {})
    expect(result).toEqual([])
  });

  it('should return an array of events to set', () => {
    const expected = mockTodos;
    const result = todosReducer(undefined, actions.setTodos(expected))
    expect(result).toEqual(expected)
  });
});