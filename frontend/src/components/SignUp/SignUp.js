import React, { useState } from 'react';
import './signup.css';
import Input from '../Input/Input';
import Form from '../Form/Form';
import { connect, useSelector } from 'react-redux';
import { createUser } from '../../actions/signupUser';

const SignUp = ({ createUser }) => {
	const [ username, setUsername ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const user = useSelector((state) => state);
	console.log(user);

	const handleSubmit = (e) => {
		e.preventDefault();
		createUser({ username, email, password });
	};
	return (
		<Form classes="signup" buttonText="Sign Up" handleSubmit={handleSubmit}>
			<Input attr="username" handleChange={setUsername} value={username} />
			<Input attr="email" handleChange={setEmail} value={email} />
			<Input attr="password" handleChange={setPassword} value={password} />
		</Form>
	);
};

export default connect(null, { createUser })(SignUp);
