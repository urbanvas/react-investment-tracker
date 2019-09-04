import { CURRENT_USER } from '../../constants/userConstants';
const currentUserAction = (user) => ({
	type: CURRENT_USER,
	user
});

export const currentUser = () => {
	const headers = {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		}
	};
	return (dispatch) => {
		return fetch('http://localhost:3000/currentuser', headers)
			.then((res) => res.json())
			.then((data) => {
				dispatch(currentUserAction(data));
			})
			.catch(console.log);
	};
};
