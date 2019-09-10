import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { currentUser } from '../actions/user/currentUser';
import './App.scss';
import Login from './Login';
import SignUp from './SignUp';
import Navbar from './Navbar';
import Logout from './Logout';
import Home from './Home';
import Entry from './Entry';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.props.currentUser();
	}

	render() {
		console.log(this.props);
		return (
			<Router>
				<Fragment>
					{!!this.props.user.id ? <Redirect to="/home" /> : <Redirect to="/" />}
					<Navbar />
					<br />
					<Route exact path="/" component={Entry} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/logout" component={Logout} />
					<Route exact path="/home" component={Home} />
				</Fragment>
			</Router>
		);
	}
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { currentUser })(App);
