import React from 'react';
import './login.css';

const login = () => {
	return (
		<form className="login">
			<label for="username">Username:</label>
			<input type="text" placeholder="Enter Username" name="username" required />
			<label for="password">Password:</label>
			<input type="text" placeholder="Enter Password" name="password" required />
			<button type="submit">Create User</button>
		</form>
	);
};

export default login;
