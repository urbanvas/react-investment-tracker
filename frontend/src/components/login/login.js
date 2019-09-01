import React from 'react';
import './login.css';

const login = ({ handleLoginFormChange, handleLoginFormSubmit, email, password }) => {
	return (
		<form className="login" onSubmit={handleLoginFormSubmit}>
			<label htmlFor="email">Email:</label>
			<input type="text" placeholder="Enter email" name="email" onChange={handleLoginFormChange} required />
			<label htmlFor="password">Password:</label>
			<input type="text" placeholder="Enter Password" name="password" onChange={handleLoginFormChange} required />
			<button type="submit">Create User</button>
		</form>
	);
};

export default login;
