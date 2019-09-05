import React, { useState } from 'react';
import Input from '../Input/Input';
import Form from '../Form/Form';
import { connect } from 'react-redux';
import { createUser } from '../../actions/user/signupUser';
import { withRouter } from 'react-router-dom';

const SignUp = ({ createUser, history }) => {
	const [ username, setUsername ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		createUser({ username, email, password });
		history.push('/app');
	};
	return (
		<Form classes="signup" buttonText="Sign Up" handleSubmit={handleSubmit}>
			<Input attr="username" handleChange={setUsername} value={username} />
			<Input attr="email" handleChange={setEmail} value={email} />
			<Input attr="password" handleChange={setPassword} value={password} />
		</Form>
	);
};

export default connect(null, { createUser })(withRouter(SignUp));
