import { getTodos } from '../getTodos';
import { setTodos, setLoading, setError } from '../../actions';
import { fetchData } from '../../utils/api';
jest.mock('../../utils/api');

describe('getTodos', () => {
  let mockDispatch;
  const mockTodos = [{ name: 'Complete developer assessment', created_by: 3 }];

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  it('should call dispatch with the setLoading action', () => {
    const thunk = getTodos();
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(true));
  });

  it('should call fetchData with the correct parameters', async () => {
    const thunk = getTodos();
    await thunk(mockDispatch);
    expect(fetchData).toHaveBeenCalledWith('/todos', 'GET');
  });

  it('should dispatch setTodos with the events', async () => {
    const expected = mockTodos;
    fetchData.mockReturnValue(expected);
    const thunk = getTodos();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setTodos(expected))
  });

  it('should dispatch setError if there is an error', async () => {
    fetchData.mockImplementation(() => {
      throw { message: 'Error fetching data.'}
    })
    const thunk = getTodos();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Error fetching data.'))
  });
});