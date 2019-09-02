import { SHOW_USER, ADD_USER, LOGIN_USER } from '../constants/userConstants';

const initialState = {};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case SHOW_USER:
			return '';
		case ADD_USER:
			return '';
		case LOGIN_USER:
			return { user: action.user };
		default:
			return state;
	}
}
