import React from 'react'
import AuthForm from '~/components/AuthForm';

import Button from '~/components/Button';

const Register = () => {
    return (
        <div className='register__wrapper'>
            <AuthForm title="Create an account" action="Register">
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
                <Button
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
