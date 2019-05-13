import { itemsReducer } from './itemsReducer'
import * as actions from '../../actions'

const mockItems = [{ name: 'Study Ruby on Rails', done: false }];

describe('itemsReducer', () => {
  it('should return the default state', () => {
    const result = itemsReducer(undefined, {})
    expect(result).toEqual([])
  });

  it('should return an array of events to set', () => {
    const expected = mockItems;
    const result = itemsReducer(undefined, actions.setItems(expected))
    expect(result).toEqual(expected)
  });
});