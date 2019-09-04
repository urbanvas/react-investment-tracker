import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Navbar from './Navbar/Navbar';
import Investment from './Investment/Investment';
import { currentUser } from '../actions/user/currentUser';
import Logout from './Logout/Logout';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	// // async fetch w/ react?
	componentDidMount() {
		this.props.currentUser();
	}

	render() {
		console.log(this.props.user);
		return (
			<Router>
				<Fragment>
					<Navbar />
					{!!this.props.user.id ? <Redirect to="/app" /> : <Redirect to="/" />}
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/login" component={Login} />
					<Logout />
				</Fragment>
			</Router>
		);
	}
}
const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { currentUser })(App);
