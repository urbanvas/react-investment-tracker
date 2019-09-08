import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Navbar from './Navbar/Navbar';
import { currentUser } from '../actions/user/currentUser';
import Logout from './Logout/Logout';
import Home from './Home/Home';

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
		console.log(this.props);
		return (
			<Router>
				<Fragment>
					{!!this.props.user.id ? <Redirect to="/home" /> : <Redirect to="/" />}
					<Logout />
					<Navbar />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/home" component={Home} />
				</Fragment>
			</Router>
		);
	}
}
const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { currentUser })(App);
