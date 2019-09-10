import React from 'react';
import { logoutUser } from '../actions/user/logoutuser';
import { connect } from 'react-redux';

const Logout = ({ logoutUser }) => {
	const handleClick = (e) => {
		e.preventDefault();
		logoutUser();
	};

	return (
		<button className="button is-danger is-large" onClick={handleClick}>
			Are you sure?
		</button>
	);
};

export default connect(null, { logoutUser })(Logout);
