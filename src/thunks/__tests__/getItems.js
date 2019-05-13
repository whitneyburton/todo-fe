import { getItems } from '../getItems';
import { setItems, setLoading, setError } from '../../actions';
import { fetchData } from '../../utils/api';
jest.mock('../../utils/api');

describe('getItems', () => {
  let mockDispatch;
  const mockItems = [{ name: 'Study Ruby on Rails', done: false, todo_id: 2 }];

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  it('should call dispatch with the setLoading action', () => {
    const thunk = getItems(mockItems[0].todo_id);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(true));
  });

  it('should call fetchData with the correct parameters', async () => {
    const thunk = getItems(mockItems[0].todo_id);
    await thunk(mockDispatch);
    expect(fetchData).toHaveBeenCalledWith(`/todos/${mockItems[0].todo_id}/items`, 'GET');
  });

  it('should dispatch setItems with the events', async () => {
    const expected = mockItems;
    fetchData.mockReturnValue(expected);
    const thunk = getItems(mockItems[0].todo_id);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setItems(expected))
  });

  it('should dispatch setError if there is an error', async () => {
    fetchData.mockImplementation(() => {
      throw { message: 'Error fetching data.'}
    })
    const thunk = getItems(mockItems[0].todo_id);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Error fetching data.'))
  });
});