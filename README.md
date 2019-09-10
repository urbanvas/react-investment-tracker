# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

MAKE SURE APP WORKS WITH NO SEED DATA

UPDATE FORM CLASSES EVERYWHERE
MOVE DELTE investment from investment component into its own?

USE DEBUGGER YOU FOOOL

change investment to investment container cuz its gonna hold a lot of data in the future (graphs and tings)
and invesemtcontainer to indexinvestmentcontainer?


ASK how to make restful routing when your show and edit is in a (bascially an li item)

		<nav class="navbar is-info" role="navigation" aria-label="main navigation">

			<div class="navbar-menu navbar-end">
				<NavLink exact to="/signup" className="link navbar-item button is-primary">
					SignUp
				</NavLink>
				<NavLink exact to="/login" className="link navbar-item button is-primary">
					Login
				</NavLink>
				<NavLink exact to="/logout" className="link navbar-item button is-danger">
					Logout
				</NavLink>
			</div>
		</nav> 
		<Fragment>
		<NavLink exact to="/signup" className="link">
			SignUp
		</NavLink>
		<NavLink exact to="/login" className="link">
			Login
		</NavLink>
		</Fragment>




        			<div class="hero-body">
				<div class="container">
					<h1 class="title">Investment Tracker</h1>
					<h2 class="subtitle">See your future over time...</h2>
				</div>
				<div class="hero-body">
					<div class="container">Hello</div>
				</div>
			</div>