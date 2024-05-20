import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import './_login.scss';
import AuthForm from '~/components/AuthForm';
import Input from '~/components/Input';
import { checkInputEmpty, validateTypeInput } from '~/utils';
import { signIn } from '~/services/access.service';

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigator = useNavigate();

  const handleSubmitLogin = () => {
    const typeInput = validateTypeInput(emailOrPhone);

    if (typeInput === "invalid") {
      setErrorMsg("Email or phone number invalid!");
    } else {
      if (!checkInputEmpty([password])) {
        setErrorMsg("Please enter all information!");
      } else {
        let payload = {
          [typeInput]: emailOrPhone,
          password
        }

        signIn(payload)
          .then(res => {
            console.log(res);
            if(res.code !== 1000)
              setErrorMsg(res?.message);
            else {
              localStorage.setItem("token", res?.metadata?.token);
              navigator("/");
            }
              
          })
          .catch(err => {
            console.error(err);
          })
      }
    }
  }

  return (
    <div className='login__wrapper'>
      <AuthForm title="Sign in" action="Sign in" onClick={handleSubmitLogin} errorMsg={errorMsg}>
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
        <Link className='login__forgot__password' to="/forgot-password">Forgot password?</Link>
      </AuthForm>
    </div>
  )
}

export default Login
