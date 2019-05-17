import React from 'react';
import LoginForm from '../../containers/LoginForm/LoginForm';

export const Welcome = ({ history }) => {
  return (
    <div className='Welcome'>
      <h3>Welcome to Tracker!</h3>
      <h4>Log in to track your project to-do's.</h4>
      <LoginForm history={history} />
    </div>
  )
}