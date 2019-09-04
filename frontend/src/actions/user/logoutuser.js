import { LOGOUT_USER } from '../../constants/userConstants';

const logoutUserAction = () => ({
	type: LOGOUT_USER
});

export const logoutUser = () => {
	const headers = {
		method: 'DELETE',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		}
	};
	return (dispatch) => {
		return fetch('http://localhost:3000/logout', headers)
			.then((res) => res.json())
			.then((data) => {
				dispatch(logoutUserAction(data));
			})
			.catch(console.log);
	};
};
