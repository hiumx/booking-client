import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthForm from '~/components/AuthForm'
import Input from '~/components/Input'
import { resetPassword } from '~/services/user.service';
import { getMyInfo } from '~/store/actions/user.action';

const ResetPassword = () => {
    const [input, setInput] = useState({
        currentPassword: "",
        newPassword: "",
        newPasswordConfirm: ""
    });

    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const navigator = useNavigate();

    const dispatch = useDispatch();
    const { id } = useSelector(state => state.user.userMyInfo);

    const handleSetInput = (e) => {
        setInput(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handelResetPassword = () => {
        const { currentPassword, newPassword, newPasswordConfirm } = input;
        if (newPassword !== newPasswordConfirm) {
            setMessage("Confirm password not matching!");
        } else {
            resetPassword(id, {
                currentPassword,
                newPassword,
                newPasswordConfirm,
            }).then(res => {
                if(res.code === 1000) {
                    setIsSuccess(true);
                    localStorage.removeItem("token");
                    dispatch(getMyInfo());
                    setTimeout(() => {
                        navigator("/auth/sign-in");
                    }, 1000);
                }
                else
                    setIsSuccess(false);
                setMessage(res.message);
            }).catch(err => {
                console.error(err);
            });
        }
    }

    return (
        <div>
            <AuthForm title="Reset Password" action="Confirm" isSocial={false} onClick={handelResetPassword} errorMsg={message}>
                <Input
                    type="password"
                    htmlFor="current-password"
                    labelName="Current password"
                    name="currentPassword"
                    placeholder="Enter your current password"
                    onChange={handleSetInput}
                />
                <Input
                    type="password"
                    htmlFor="new-password"
                    labelName="New password"
                    name="newPassword"
                    placeholder="Enter your new password"
                    onChange={handleSetInput}
                />
                <Input
                    type="password"
                    htmlFor="confirm-new-password"
                    labelName="Confirm new password"
                    name="newPasswordConfirm"
                    placeholder="Retype your new password"
                    onChange={handleSetInput}
                />
            </AuthForm>
        </div>
    )
}

export default ResetPassword
