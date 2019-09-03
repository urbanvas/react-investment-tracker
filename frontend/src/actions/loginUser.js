import { LOGIN_USER } from '../constants/userConstants';
const loginUser = ({ user }) => ({
	type: LOGIN_USER,
	user
});

export const getCurrentUser = (userInfo) => {
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
				console.log(data);
				dispatch(loginUser(data));
			})
			.catch(console.log);
	};
};
