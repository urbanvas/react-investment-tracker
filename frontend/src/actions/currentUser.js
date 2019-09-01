import { SET_CURRENT_USER } from '../constants/userConstants';
export const setCurrentUser = ({ user }) => {
	console.log(user);
	return {
		type: SET_CURRENT_USER,
		user
	};
};

export const getCurrentUser = (userCredentials) => {
	return (dispatch) => {
		return fetch('http://localhost:3000/currentuser', {
			credentials: 'include'
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch(setCurrentUser(data));
			})
			.catch(console.log);
	};
};
