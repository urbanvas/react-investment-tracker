import React, { useState } from 'react';
import './login.css';
import Input from '../input/Input';
import Form from '../form/Form';

const Login = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const userInfo = { email, password };
		fetch('http://localhost:3000/login', headers)
			.then((res) => res.json())
			.then((userJSON) => {
				console.log(userJSON);
			})
			.catch(console.log);
	};
	return (
		<Form classes="login" buttonText="Login" handleSubmit={handleSubmit}>
			<Input attr="email" handleChange={setEmail} value={email} />
			<Input attr="password" handleChange={setPassword} value={password} />
		</Form>
	);
};

export default Login;
