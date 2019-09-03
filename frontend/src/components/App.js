import React from 'react';
import './App.css';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

class App extends React.Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		_hoe: null,
	// 		get hoe() {
	// 			return this._hoe;
	// 		},
	// 		set hoe(value) {
	// 			this._hoe = value;
	// 		},
	// 		loginForm: {
	// 			email: '',
	// 			password: ''
	// 		}
	// 	};
	// }
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
			.then(console.log)
			.catch(console.log);
	}

	// handleLoginFormChange = (e) => {
	// 	const { name, value } = e.target;
	// 	this.setState({
	// 		loginForm: {
	// 			...this.state.loginForm,
	// 			[name]: value
	// 		}
	// 	});
	// };

	// handleLoginFormSubmit = (e) => {
	// 	e.preventDefault();
	// 	const userInfo = this.state.loginForm;
	// 	const headers = {
	// 		method: 'POST',
	// 		credentials: 'include',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			'Access-Control-Allow-Origin': 'http://localhost:3000'
	// 		},
	// 		body: JSON.stringify({
	// 			user: userInfo
	// 		})
	// 	};
	// 	fetch('http://localhost:3000/login', headers)
	// 		.then((res) => res.json())
	// 		.then((userJSON) => {
	// 			console.log(userJSON);
	// 			if (userJSON.error) {
	// 				console.log('invalid');
	// 			} else {
	// 				this.setState({
	// 					currentUser: userJSON
	// 				});
	// 			}
	// 		})
	// 		.catch(console.log);
	// };

	render() {
		return (
			<div>
				<Login />
				<SignUp />
				<button onClick={this.logout}>Logout</button>
			</div>
		);
	}
}

export default App;
