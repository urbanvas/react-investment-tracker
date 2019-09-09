import { LOGIN_USER } from '../../constants/userConstants';
const loginUserAction = (user) => ({
	type: LOGIN_USER,
	user
});

export const loginUser = (userInfo) => {
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
				if (!data.status) {
					dispatch(loginUserAction(data));
					window.history.pushState(null, null, '/home');
				}
			})
			.catch(console.log);
	};
};
