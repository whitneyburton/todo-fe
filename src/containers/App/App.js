import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../../thunks/getTodos';
import { getItems } from '../../thunks/getItems';
import TodoForm from '../TodoForm/TodoForm';
import TodoContainer from '../TodoContainer/TodoContainer';

export const App = ({ getTodos, getItems }) => {
  useEffect(() => {
    getTodos();
    getItems(16)
  }, []);

  return (
    <div className='App'>
      <h1>Tracker</h1>
      <TodoForm />
      <TodoContainer />
    </div>
  );
};

export const mapDispatchToProps = dispatch => ({
  getTodos: () => dispatch(getTodos()),
  getItems: id => dispatch(getItems(id))
});

export default connect(null, mapDispatchToProps)(App);