import React from 'react'
import AuthForm from '~/components/AuthForm'
import Input from '~/components/Input'

const ForgotPassword = () => {
  return (
    <div>
      <AuthForm title="Forgot password" action="Send" isSocial={false}>
      <Input
          type="text"
          htmlFor="email"
          labelName="Email address or phone number"
          placeholder="Enter your email address or phone number"
        />
      </AuthForm>
    </div>
  )
}

export default ForgotPassword
