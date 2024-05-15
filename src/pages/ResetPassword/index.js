import React from 'react'
import AuthForm from '~/components/AuthForm'
import Input from '~/components/Input'

const ResetPassword = () => {
    return (
        <div>
            <AuthForm title="Reset Password" action="Confirm" isSocial={false}>
                <Input
                    type="email"
                    htmlFor="email"
                    labelName="Email address"
                    placeholder="Enter your email address"
                />
                <Input
                    type="password"
                    htmlFor="current-password"
                    labelName="Current password"
                    placeholder="Enter your current password"
                />
                <Input
                    type="password"
                    htmlFor="new-password"
                    labelName="New password"
                    placeholder="Enter your new password"
                />
                <Input
                    type="password"
                    htmlFor="confirm-new-password"
                    labelName="Confirm new password"
                    placeholder="Retype your new password"
                />
            </AuthForm>
        </div>
    )
}

export default ResetPassword
