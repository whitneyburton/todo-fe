import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapDispatchToProps } from '../containers/App/App';
import { shallow } from 'enzyme';
import { getTodos } from '../thunks/getTodos';
jest.mock('../thunks/getTodos');

describe('App', () => {
  let wrapper;
  let mockError;

  beforeEach(() => {
    mockError = '';

    wrapper = shallow(
      <App
        getEvents={getTodos}
        error={mockError}
      />
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
