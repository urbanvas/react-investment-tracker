import { SIGN_UP_USER } from '../../constants/userConstants';
const signUpUser = (user) => ({
	type: SIGN_UP_USER,
	user
});

export const createUser = (userInfo) => {
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
		return fetch('http://localhost:3000/api/v1/users', headers)
			.then((res) => res.json())
			.then((data) => {
				dispatch(signUpUser(data));
			})
			.catch(console.log);
	};
};
