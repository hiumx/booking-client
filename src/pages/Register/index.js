import React, { useState } from 'react'
import AuthForm from '~/components/AuthForm';
import Input from '~/components/Input';
import { signUp } from '~/services/access.service';
import { checkConfirmPassword, checkInputEmpty, validateTypeInput } from '~/utils';

const Register = () => {
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleConfirmSignUp = () => {
        const typeInput = validateTypeInput(emailOrPhone);
        if(typeInput === "invalid") {
            setErrorMsg("Email or phone number invalid!");
        } else {
            if(!checkInputEmpty([emailOrPhone, password, confirmPassword])) {
                setErrorMsg("Please enter all information!");
            } else {
                if(checkConfirmPassword(password, confirmPassword)) {
                    let payload = {
                        [typeInput]: emailOrPhone,
                        password
                    }
                    console.log(payload);
        
                    signUp(payload)
                        .then(response => console.log(response))
                        .catch(error => {
                            console.error(error);
                        })
                } else {
                    setErrorMsg("Confirm password not matching!")
                }
            }
        }
    }

    return (
        <div className='register__wrapper'>
            <AuthForm 
                title="Create an account" 
                action="Sign up" 
                onClick={handleConfirmSignUp} 
                errorMsg={errorMsg}
            >
                <Input
                    type="text"
                    htmlFor="email"
                    labelName="Email address or phone number"
                    placeholder="Enter your email address or phone number"
                    value={emailOrPhone}
                    onChange={e => setEmailOrPhone(e.target.value)}
                />
                <Input
                    type="password"
                    htmlFor="password"
                    labelName="Password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Input
                    type="password"
                    htmlFor="confirm-password"
                    labelName="Confirm password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
            </AuthForm>
        </div>
    )
}

export default Register
