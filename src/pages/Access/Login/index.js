import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import './_login.scss';
import AuthForm from '~/components/AuthForm';
import Input from '~/components/Input';
import { checkInputEmpty, checkObjEmpty, isRoleExist, validateTypeInput } from '~/utils';
import { signIn } from '~/services/access.service';
import { useDispatch, useSelector } from 'react-redux';
import { getMyInfo } from '~/store/actions/user.action';

const Login = () => {
	const [emailOrPhone, setEmailOrPhone] = useState("");
	const [password, setPassword] = useState("");
	const [errorMsg, setErrorMsg] = useState("");

	const navigator = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(state => state.user.userMyInfo);


	useEffect(() => {
		if (!checkObjEmpty(user)) {
			const isAdmin = isRoleExist(user?.roles, "Admin");
			const isHotelManager = isRoleExist(user?.roles, "Hotel manager");
			if (isAdmin)
				navigator('/system');
			else if (isHotelManager)
				navigator('/hotel-manager');
			else
				navigator('/');
		}
	}, [user])

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
						if (res.code !== 1000)
							setErrorMsg(res?.message);
						else {
							localStorage.setItem("token", res?.metadata?.token);
							dispatch(getMyInfo());
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
				<Link className='login__forgot__password' to="/auth/forgot-password">Forgot password?</Link>
			</AuthForm>
		</div>
	)
}

export default Login
