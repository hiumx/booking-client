import React from 'react'
import AuthForm from '~/components/AuthForm';

import Input from '~/components/Input';

const Register = () => {
    return (
        <div className='register__wrapper'>
            <AuthForm title="Create an account" action="Register">
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
                <Input
                    type="password"
                    htmlFor="confirm-password"
                    labelName="Confirm password"
                    placeholder="Confirm your password"
                />
            </AuthForm>
        </div>
    )
}

export default Register
