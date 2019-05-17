import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../../thunks/getTodos';
import { getUser } from '../../thunks/getUser';

export const LoginForm = ({ getUser, getTodos, error, history }) => {
  const [email, editEmail] = useState('');
  const [password, editPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    await signinUser();
    updatePath();
  };
  
  const signinUser = async () => {
    const id = await getUser(email, password);
    getTodos(id);
  }

  const updatePath = () => {
    !error && history.replace('/home');
  }


  return (
    <Fragment>
      <form autoComplete='off' onSubmit={handleSubmit} className='LoginForm'>
        <label>
          Email
          <input
            className={error ? 'input-error' : ''}
            onChange={e => editEmail(e.target.value)}
            required
            type='email'
            id='email'
            value={email}
          />
        </label>
        <label>
          Password
          <input
            className={error ? 'input-error' : 'input'}
            onChange={e => editPassword(e.target.value)}
            required
            type='password'
            id='password'
            value={password}
          />
        </label>
        <button type='submit' onClick={handleSubmit}>
          Log in
        </button>
      </form>
      {error && <h4>Incorrect email or password. Please try again.</h4>}
    </Fragment>
  );
};

export const mapStateToProps = state => ({
  error: state.error
});

export const mapDispatchToProps = dispatch => ({
  getTodos: id => dispatch(getTodos(id)),
  getUser: (email, password) => dispatch(getUser(email, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
