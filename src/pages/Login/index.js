import React from 'react'
import './_login.scss';
import AuthForm from '~/components/AuthForm';
import Input from '~/components/Input';

const Login = () => {
  return (

    <div className='login__wrapper'>
      <AuthForm title="Sign in" action="Sign in">
        <Input
          type="email"
          htmlFor="email"
          labelName="Email address or phone number"
          placeholder="Enter your email address"
        />
        <Input
          type="password"
          htmlFor="password"
          labelName="Password"
          placeholder="Enter your password"
        />
        <a className='login__forgot__password' href='#'>Forgot password?</a>
      </AuthForm>
    </div>
  )
}

export default Login
