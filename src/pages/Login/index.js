import React from 'react'
import './_login.scss';
import AuthForm from '~/components/AuthForm';
import Button from '~/components/Button';

const Login = () => {
  return (

    <div className='login__wrapper'>
      <AuthForm title="Sign in" action="Sign in">
        <Button
          type="email"
          htmlFor="email"
          labelName="Email address or phone number"
          placeholder="Enter your email address"
        />
        <Button
          type="password"
          htmlFor="password"
          labelName="Password"
          placeholder="Enter your password"
        />
      </AuthForm>
    </div>
  )
}

export default Login
