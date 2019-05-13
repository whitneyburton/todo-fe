import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../../thunks/getTodos';
import { getItems } from '../../thunks/getItems';
import { TodoForm } from '../TodoForm/TodoForm';

export const App = ({ getTodos, getItems }) => {
  useEffect(() => {
    getTodos();
    getItems(2)
  }, []);

  return (
    <div className='App'>
      <h1>Tracker</h1>
      <TodoForm />
    </div>
  );
};

export const mapDispatchToProps = dispatch => ({
  getTodos: () => dispatch(getTodos()),
  getItems: id => dispatch(getItems(id))
});

export default connect(null, mapDispatchToProps)(App);