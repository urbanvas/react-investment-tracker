import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<Fragment>
			<NavLink exact to="/signup" className="link">
				SignUp
			</NavLink>
			<NavLink exact to="/login" className="link">
				Login
			</NavLink>
		</Fragment>
	);
};

export default Navbar;
