import React, { useState } from 'react';
import Input from './Input';
import Form from './Form';
import { connect } from 'react-redux';
import { loginUser } from '../actions/user/loginUser';

const Login = ({ loginUser }) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		await loginUser({ email, password });
	};

	return (
		<Form classes="login" buttonText="Login" handleSubmit={handleSubmit}>
			<Input
				attr="email"
				handleChange={setEmail}
				value={email}
				inputClassArr={[ 'input', 'is-rounded', 'is-primary' ]}
				labelClassArr={[ 'label' ]}
			/>
			<Input
				attr="password"
				handleChange={setPassword}
				value={password}
				inputClassArr={[ 'input', 'is-rounded', 'is-primary' ]}
				labelClassArr={[ 'label' ]}
			/>
		</Form>
	);
};

export default connect(null, { loginUser })(Login);
