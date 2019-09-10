import React from 'react';
import { NavLink } from 'react-router-dom';

const Entry = () => {
	return (
		<article className="message is-primary container is-fullhd">
			<div className="message-header">
				<h3 className="is-size-4">Hello wise one, Welcome to your future.</h3>
			</div>
			<div className="message-body has-text-centered">
				<NavLink exact to="/signup" className="menu-label has-text-weight-bold">
					SignUp
				</NavLink>
				<br />
				<NavLink exact to="/login" className="menu-label has-text-weight-bold">
					Login
				</NavLink>
			</div>
		</article>
	);
};

export default Entry;
