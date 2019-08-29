import { SHOW_USER, ADD_USER } from '../constants/userConstants';

const initialState = {};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case SHOW_USER:
			return '';
		case ADD_USER:
			return '';
		default:
			return state;
	}
}
