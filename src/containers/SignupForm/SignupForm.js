import React, { useState } from 'react';
import { connect } from 'react-redux';

export const SignupForm = () => {
  const [email, editEmail] = useState('');
  const [password, editPassword] = useState('');
  const [confirmation, editConfirmation] = useState('');

  const handleSignup = () => {};

  return (
    <div className='SignupForm'>
      <h3>Sign up</h3>
      <form>
      <label>
          Email
        <input
          required type='email'
          placeholder='Email'
          id='email'
          onChange={e => editEmail(e.target.value)}
        />
        </label>
        <label>
          Password
        <input
          required type='password'
          placeholder='Password'
          id='password'
          onChange={e => editPassword(e.target.value)}
        />
        </label>

        <input
          required type='password'
          placeholder='Password Confirmation'
          id='password_confirmation'
          onChange={e => editConfirmation(e.target.value)}
        />
        <button onClick={handleSignup}>Submit</button>
      </form>
    </div>
  );
};

export default connect()(SignupForm);
