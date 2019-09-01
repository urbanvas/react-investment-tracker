import { SHOW_USER, ADD_USER, SET_CURRENT_USER } from '../constants/userConstants';

const initialState = {};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case SHOW_USER:
			return '';
		case ADD_USER:
			return '';
		case SET_CURRENT_USER:
			return action.user;
		default:
			return state;
	}
}
