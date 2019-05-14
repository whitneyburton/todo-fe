import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../../thunks/getTodos';
import TodoForm from '../TodoForm/TodoForm';
import TodoContainer from '../TodoContainer/TodoContainer';

export const App = ({ getTodos }) => {
  useEffect(() => {
    getTodos();
  });

  return (
    <div className='App'>
      <h1 className='tracker-title'>TRACKER</h1>
      <TodoForm />
      <TodoContainer />
    </div>
  );
};

export const mapDispatchToProps = dispatch => ({
  getTodos: () => dispatch(getTodos())
});

export default connect(null, mapDispatchToProps)(App);