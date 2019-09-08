import React, { useState } from 'react';
import Input from '../Input/Input';
import Form from '../Form/Form';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/user/loginUser';
import { withRouter } from 'react-router-dom';

const Login = ({ loginUser, history }) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		await loginUser({ email, password });
		history.push('/home');
	};

	return (
		<Form classes="login" buttonText="Login" handleSubmit={handleSubmit}>
			<Input
				attr="email"
				handleChange={setEmail}
				value={email}
				inputClassArr={[ 'input', 'is-danger', 'is-large' ]}
				labelClassArr={[ 'label' ]}
			/>
			<Input
				attr="password"
				handleChange={setPassword}
				value={password}
				inputClassArr={[ 'input', 'is-danger', 'is-large' ]}
				labelClassArr={[ 'label' ]}
			/>
		</Form>
	);
};

export default connect(null, { loginUser })(withRouter(Login));
