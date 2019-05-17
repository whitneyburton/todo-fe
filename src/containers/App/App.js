import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../../thunks/getTodos';
import { getUser } from '../../thunks/getUser';
import TodoForm from '../TodoForm/TodoForm';
import TodoContainer from '../TodoContainer/TodoContainer';
import { Welcome } from '../../components/Welcome/Welcome';
import { withRouter, Route, Switch } from 'react-router-dom';
import doneicon from '../../images/done-icon.svg';

export const App = ({ userId, error, location, history }) => {
  useEffect(() => {
    !userId && history.replace('/');
  });

  return (
    <div className='App'>
      <h1 className='tracker-title'>
        TRACKER
        <img className='done-icon' src={doneicon} alt='check icon' />
      </h1>
      <Switch>
        <Route exact path='/' render={() => <Welcome history={history} />} />
        <Route
          path='/home'
          render={() => (
            <Fragment>
              <TodoForm />
              <TodoContainer />
            </Fragment>
          )}
        />
      </Switch>
    </div>
  );
};

export const mapStateToProps = state => ({
  userId: state.userId,
  error: state.error
});

export const mapDispatchToProps = dispatch => ({
  getTodos: id => dispatch(getTodos(id)),
  getUser: (email, password) => dispatch(getUser(email, password))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
