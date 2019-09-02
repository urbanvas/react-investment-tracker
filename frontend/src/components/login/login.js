import React, { useState } from 'react';
import './login.css';
import Input from '../input/Input';
import Form from '../form/Form';
import { connect, useSelector } from 'react-redux';
import { getCurrentUser } from '../../actions/loginUser';

const Login = ({ getCurrentUser }) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const user = useSelector((state) => state.userReducer.user);
	console.log(user);

	const handleSubmit = (e) => {
		e.preventDefault();
		getCurrentUser({ email, password });
	};
	return (
		<Form classes="login" buttonText="Login" handleSubmit={handleSubmit}>
			<Input attr="email" handleChange={setEmail} value={email} />
			<Input attr="password" handleChange={setPassword} value={password} />
			<p>{user ? user.id : 'fail'}</p>
		</Form>
	);
};

export default connect(null, { getCurrentUser })(Login);
