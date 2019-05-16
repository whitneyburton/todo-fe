import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../../thunks/getTodos';
import { getUser } from '../../thunks/getUser';
import TodoForm from '../TodoForm/TodoForm';
import TodoContainer from '../TodoContainer/TodoContainer';

export const App = ({ getTodos, getUser, userId }) => {
  useEffect(() => {
    retrieveUser();
  }, []);
  
  const retrieveUser = async () => {
    const id = await getUser('whitney@gmail.com', '123123');
    getTodos(id);
  }

  return (
    userId ? 
    <div className='App'>
      <h1 className='tracker-title'>TRACKER</h1>
      <TodoForm />
      <TodoContainer />
      </div> :
      <div className='App'>
        <h1 className='tracker-title'>TRACKER</h1>
        <h1 className='signin-prompt'>Please sign in or register!</h1>
      </div>
  );
};

export const mapStateToProps = state => ({
  userId: state.userId
});

export const mapDispatchToProps = dispatch => ({
  getTodos: id => dispatch(getTodos(id)),
  getUser: (email, password) => dispatch(getUser(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);