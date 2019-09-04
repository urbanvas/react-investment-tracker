import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Navbar from './Navbar/Navbar';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		};
	}
	// // async fetch w/ react?
	logout = (e) => {
		fetch('http://localhost:3000/logout', {
			credentials: 'include',
			method: 'DELETE'
		})
			.then((res) => res.json())
			.then(console.log)
			.catch(console.log);
	};

	componentDidMount() {
		fetch('http://localhost:3000/currentuser', {
			credentials: 'include'
		})
			.then((res) => res.json())
			.then((data) => {
				if (!data.status) {
					this.setState(() => ({ currentUser: data }));
				}
			})
			.catch(console.log);
	}

	render() {
		console.log(this.state);
		return (
			<Router>
				<Fragment>
					<Navbar />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/login" component={Login} />
					<button onClick={this.logout}>Logout</button>
				</Fragment>
			</Router>
		);
	}
}

export default App;
