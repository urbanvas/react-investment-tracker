import React from 'react';
import { logoutUser } from '../actions/user/logoutuser';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Logout = ({ logoutUser, history }) => {
	const handleClick = (e) => {
		e.preventDefault();
		logoutUser();
		history.push('/');
	};

	return <button onClick={handleClick}>Logout</button>;
};

export default connect(null, { logoutUser })(withRouter(Logout));