import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const [ burgerClass, setBurgerClass ] = useState(false);
	const handleClick = (e) => {
		burgerClass ? setBurgerClass(false) : setBurgerClass(true);
	};
	return (
		<section className="hero is-warning is-bold">
			<div className="hero-head">
				<nav className="navbar">
					<div className="container">
						<div className="navbar-brand">
							<span onClick={handleClick} className="navbar-burger burger" data-target="navbarMenuHeroA">
								<span />
								<span />
								<span />
							</span>
						</div>
						<div id="navbarMenuHeroA" className={burgerClass ? 'navbar-menu is-active' : 'navbar-menu'}>
							<div className="navbar-end">
								<NavLink exact to="/signup" className="navbar-item">
									SignUp
								</NavLink>
								<NavLink exact to="/login" className="navbar-item">
									Login
								</NavLink>
								<NavLink exact to="/logout" className="navbar-item">
									Logout
								</NavLink>
							</div>
						</div>
					</div>
				</nav>
			</div>

			<div className="hero-body">
				<div className="container has-text-centered">
					<p className="title is-1">Investment Tracker</p>
					<p className="subtitle is-4">Take Charge of Your Wealth</p>
				</div>
			</div>
			<div className="hero-foot">
				<div className="container">
					<p className="title is-5">Neil V.</p>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
