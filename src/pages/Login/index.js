import React from 'react'
import './_login.scss';
import AuthForm from '~/components/AuthForm';
import Input from '~/components/Input';
import { Link } from 'react-router-dom';

const Login = () => {
  return (

    <div className='login__wrapper'>
      <AuthForm title="Sign in" action="Sign in">
        <Input
          type="text"
          htmlFor="email"
          labelName="Email address or phone number"
          placeholder="Enter your email address or phone number"
        />
        <Input
          type="password"
          htmlFor="password"
          labelName="Password"
          placeholder="Enter your password"
        />
        <Link className='login__forgot__password' to="/forgot-password">Forgot password?</Link>
      </AuthForm>
    </div>
  )
}

export default Login
