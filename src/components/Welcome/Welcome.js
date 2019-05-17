import React from 'react';
import LoginForm from '../../containers/LoginForm/LoginForm';
import SignupForm from '../../containers/SignupForm/SignupForm';

export const Welcome = ({ history }) => {
  return (
    <div className='Welcome'>
      <h3>Welcome to Tracker!</h3>
      <p>Log in to track your project to-do's.</p>
      <LoginForm history={history} />
      <p>OR</p>
      <SignupForm />
    </div>
  )
}