import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../../thunks/getTodos';
import { TodoForm } from '../TodoForm/TodoForm';

export const App = ({ getTodos }) => {
  useEffect(() => {
    getTodos();
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
});

export default connect(null, mapDispatchToProps)(App);