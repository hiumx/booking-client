import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AuthForm from '~/components/AuthForm'
import Input from '~/components/Input'
import { sendEmail } from '~/services/email.service';

import "./_forgot_password.scss";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const handleClickForgotPassword = async () => {
        
        const res = await sendEmail({ toEmail: email });
        
        if(res?.code !== 1000) {
            setIsSuccess(false);
            setMessage(res?.message)
        } else {
            setIsSuccess(true);
        }

        
    }

    if(message === undefined) {
        setMessage("Please check your email to reset password");
    }

    return (
        <div className='forgot__password__wrapper'>
            <AuthForm title="Forgot password" action="Send" isSocial={false} onClick={handleClickForgotPassword} errorMsg={message}>
                <Input
                    type="email"
                    htmlFor="email"
                    labelName="Email address"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </AuthForm>
            <Link className='forgot__password__sign__in__link' to="/auth/sign-in">Sign in</Link>
        </div>
    )
}

export default ForgotPassword
