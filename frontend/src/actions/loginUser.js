import { LOGIN_USER } from '../constants/userConstants';
export const loginUser = ({ user }) => {
	return {
		type: LOGIN_USER,
		user
	};
};

export const getCurrentUser = (userCredentials) => {
	const headers = {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			user: userInfo
		})
	};
	return (dispatch) => {
		return fetch('http://localhost:3000/login', headers)
			.then((res) => res.json())
			.then((data) => {
				dispatch(setCurrentUser(data));
			})
			.catch(console.log);
	};
};
