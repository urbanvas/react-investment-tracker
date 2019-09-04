import React, { useState } from 'react';
import './login.css';
import Input from '../Input/Input';
import Form from '../Form/Form';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/user/loginUser';
import { withRouter } from 'react-router-dom';

const Login = ({ loginUser, history }) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		loginUser({ email, password });
		history.push('/app');
	};

	return (
		<Form classes="login" buttonText="Login" handleSubmit={handleSubmit}>
			<Input attr="email" handleChange={setEmail} value={email} />
			<Input attr="password" handleChange={setPassword} value={password} />
		</Form>
	);
};

export default connect(null, { loginUser })(withRouter(Login));
